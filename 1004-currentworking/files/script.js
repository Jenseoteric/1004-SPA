// Forest Mystery text adventure SPA by J McEwan //

// load script when ready
document.addEventListener("DOMContentLoaded", function() {
  getJSON();
});



//	                      //
// COLLECT DATA FROM JSON //
//                        //

// use keyword await before making calls to async functions
async function getJSON() { 
	
	// set the resource url
	const requestURL = "./server/data.json"; 	
	// initialise new Request object using the url
	const request = new Request(requestURL); 	
	
	// try to fetch, or else catch errors
	try {
		// make a network request for resource using fetch()
		const response = await fetch(request); 	

		if (response.ok) {
  		//retrieve the response as JSON using the json() function
			const mydata =  await response.json();

			// call storeCards function to store the data
			storeData(mydata);	  	
					
		} else {
    		throw new Error(response.status);
		}
	} catch (error) {
	  	console.error("Fetch", error);
	}	
}

// datacards variable will store the json data as an array
const datacards = [];

// storeData function iterates through the data file and creates an array
function storeData(obj) {
	const myIds = obj;	
	for (const id of myIds) {
		datacards.push(id);
	}
	readinitialdata(); // when the data has completed storing, the first chapter is loaded
}



//			     //
// VARIABLES //
//			     //

// html elements
const chapterimage = document.getElementById("chapterimage");
const chapter = document.getElementById("chapter");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const invlist = document.getElementById("inv");
const linebreak = document.getElementsByClassName("br");
const puzzlebox = document.getElementById("puzzlebox");
const textbox = document.getElementById("text_box");

// other game variables
let thisid; // current chapter id
let thistext; // current chapter text
let option1; // first option chapter id target - required for special conditions
let option2; // second option chapter id target - required for special conditions
let nextid; // the selected next chapter id
let key; // inventory item
let lighter; // inventory item
let candle; // inventory item
let lit; // triggered by lighting the candle



//						          //
//	MESSAGES TO PLAYERS //
//						          //

// welcome console log for players
console.log("Welcome to \"Forest Mystery\"");

// setting a paragraph of information to use in game endings
let infoline1 = "\"Forest Mystery\" by J. McEwan ©2024.";
let infoline2 = "Candle favicon by Starup Graphic Design, available from iconfinder.com/startupgraphicdesign and licenced as free for commercial use.";
let infopara = document.createElement("p");
infopara.setAttribute("style", "font-size: 12px ");
infopara.innerHTML = ("<br><i>" + infoline1 + "<br>" + infoline2 + "<\/i>");



//				    //
// TIMER CODE	//
//				    //

// timer variables
let startTime = Date.now(); // gets start time on page load
let hours;
let minutes;
let seconds;
let millis;
let timetracker = document.getElementById("timetracker"); // "time passed" paragraph

// timer restart function
function restartTimer() {
	startTime = Date.now();
}

// function to get time elapsed
function getTimeElapsed() { // calculates time elapsed since page load
	millis = Date.now() - startTime;
	hours = Math.floor(millis / (1000*60*60) % 24);
	minutes = Math.floor(millis / (1000*60) % 60);
	seconds = Math.floor(millis / 1000) % 60;
}



// using localStorage to check if player has explored all paths
function checkStorage() {
  let door = localStorage.getItem("door");
  let run = localStorage.getItem("run");
  let clear = localStorage.getItem("clear");
  let glow = localStorage.getItem("glow");
	
  if ((door == 1) && (run == 1) && (clear == 1) && (glow == 1)) {
    chapter.innerHTML += ("<br> <br>YOU FOUND ALL THE ENDINGS!! Thank you for your dedication!");
    localStorage.clear();
  }
}
  


//																		  //
//DEV TOOLS: cheatcode section, requires html element to be uncommented!! //
//to load a specific chapter enter the datacard id value e.g. data100	  //
// 
/*
let cheatform = document.getElementById("cheatform");
cheatform.addEventListener("submit", () => {
	let cheatcode = document.getElementById("cheatcode").value; // collect value
	cheatcode = cheatcode.substr(5); // trims string to last 2 characters
	nextid = eval(cheatcode); // converts numerical string to int for searching datacards array
	readnextdata();
});
*/


  
//								              //
// INITIAL CHAPTER LOADING CODE	//
//								              //
  
function readinitialdata() { 

  // set sessionStorage keys to track endings achieved
  localStorage.setItem("door", "0");
  localStorage.setItem("run", "0");
  localStorage.setItem("clear", "0");
  localStorage.setItem("glow", "0");

  // load first chapter
  chapter.innerHTML = datacards[0].text;
  invlist.innerHTML = "Inventory: ";
  thisid = datacards[0].id;
  option1 = datacards[0].optionkey1;
  option2 = datacards[0].optionkey2;
  button1.innerHTML = datacards[0].button1txt;
  button2.innerHTML = datacards[0].button2txt;
  chapterimage.src = "images\/" + datacards[0].image; 
  chapterimage.alt = datacards[0].imagealt;
  disableButton();
}



//					          //
//  BUTTON SELECTORS //
//					         //

  button1.addEventListener("click", function() {
  nextid = option1;
  readnextdata();
}, false);

button2.addEventListener("click", function() {
  nextid = option2;
  readnextdata();
}, false);

// button 2 disable function
function disableButton() {
  button2.innerHTML = "";
  button2.disabled = true;
  button2.classList.add("disabled");
}

//button 2 enable function
function enableButton() {
	button2.innerHTML = datacards[thisid].button2txt;
	button2.disabled = false;
	button2.classList.remove("disabled");
}



//						          //
// LOAD STORY CHAPTERS	//
//						          //


function readnextdata() {
  thisid = nextid;

  // load elements from card
    option1 = datacards[thisid].optionkey1;
    option2 = datacards[thisid].optionkey2;
    chapter.innerHTML = datacards[thisid].text;
    button1.innerHTML = datacards[thisid].button1txt;
    chapterimage.src = "images\/" + datacards[thisid].image;
    chapterimage.alt = datacards[thisid].imagealt;
   
  // test for button2
  if (datacards[thisid].disableButton2 == 1) {
  	disableButton();
  }
  else {
	enableButton();
  }

  // test for special chapter behaviours
  if (datacards[thisid].isSpecial == 1) { 	
    doSpecial();
  }
}



//						 //
// LOAD SPECIAL CHAPTERS //
//						 //

function doSpecial() {
  let trimid = datacards[thisid].id.substr(4);
  let checkid = eval(trimid);
  
  switch(checkid) {

    case 100:
      timetracker.innerHTML = ""; 
      restartTimer();
      invlist.innerHTML = "Inventory: ";
      candle = 0; // reset starter variables
      lighter = 0;
      lit = 0;
      key = 0;
      break;

    case 102:
      if (!lighter) {
        lighter = 1;
        invlist.innerHTML += " lighter,";
      }
      break;

    case 107:
      if (lit) {
        option2 = "36"; 
      }
      break;

    case 111: // check if the candle already exists first
      if (!candle) {
        candle = 1;
        invlist.innerHTML += " candle,";
      }
      break;
        
    case 114:
	  disableButton();
      if (candle) {
        if (lighter) {
          option2 = "15"; 
          button2.innerHTML = "Light the candle";
          button2.disabled = false;
          button2.classList.remove("disabled");
        }
      }
      break;

    case 115:
      if (!lit) {
        lit = 1; //light the candle
      }
      if (key) {
	  	disableButton(); 
      }
      break;
  
    case 117:
      key = 1;
      invlist.innerHTML = "Inventory: Monkey Key";
      break;
    
    case 120:
      if (lighter) {
        option1 = "19";
      }
      break; 
    
    case 125:
      localStorage.setItem("door", "1");
      break;
    
    case 126:
      invlist.innerHTML = "";
      chapter.appendChild(infopara); // add game information
      checkStorage();
      break;
    
    case 127:
      invlist.innerHTML = "";
      getTimeElapsed();
      let text = (hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
      timetracker.innerHTML = ("<br>You completed this game in: " + text);
      timetracker.appendChild(infopara); // add game information
      checkStorage();
      break;
      
    case 130:
      localStorage.setItem("run", "1");
      break;
    
    case 133:
      invlist.innerHTML = "";
      localStorage.setItem("glow", "1");
      break;
      
    case 134:
      localStorage.setItem("clear", "1");
      break;
    
    case 136:
      puzzlebox.innerHTML = ("");
      if (lit) {
        option2 = "15";
      }
      break;

    case 138:
      createPuzzle();
      break;

    default:
      console.error("Something unexpected has occurred.");
      break;
  }  
}



//								            //
//  CREATE THE MONKEY PUZZLE 	//
//								            //

function createPuzzle() {
  // remove inventory element
  invlist.innerHTML = "";

  // make some space
  chapter.innerHTML += ("<br><br>");

  //createform and inputs
  let puzzleform = document.createElement("form");
  let slot1 = document.createElement("input");
  let slot2 = document.createElement("input");
  let slot3 = document.createElement("input");
  let puzzlesubmit = document.createElement("input");

  //Set attributes
  puzzleform.setAttribute("onSubmit", "return false");
  slot1.setAttribute("type", "text");
  slot2.setAttribute("type", "text");
  slot3.setAttribute("type", "text");
  slot1.setAttribute("maxlength", "1");
  slot2.setAttribute("maxlength", "1");
  slot3.setAttribute("maxlength", "1");
  slot1.setAttribute("name", "input1");
  slot2.setAttribute("name", "input2");
  slot3.setAttribute("name", "input3"); 
  slot1.setAttribute("class", "pinInput");
  slot2.setAttribute("class", "pinInput");
  slot3.setAttribute("class", "pinInput");
  puzzlesubmit.setAttribute("class", "submitInput");
  puzzlesubmit.setAttribute("value", "Confirm");
  puzzlesubmit.setAttribute("type", "submit");

  //Append elements to form and form to div
  puzzleform.appendChild(slot1);
  puzzleform.appendChild(slot2);
  puzzleform.appendChild(slot3);
  puzzleform.appendChild(puzzlesubmit);
  puzzlebox.appendChild(puzzleform);

  // add an event listener to the form
  puzzlesubmit.addEventListener("click", function() {
    
    //Create checker variables
    let playerslot1 = 0;
    let playerslot2 = 0;
    let playerslot3 = 0;
    let puzzlecorrect = 0;

    //Check if the values are correct
    if ((slot1.value == "l") || (slot1.value == "L")) {
      playerslot1 = 1;
    }

    if ((slot2.value == "i") || (slot2.value == "I")) {
      playerslot2 = 1;
    }

    if ((slot3.value == "t") || (slot3.value == "T")) {
      playerslot3 = 1;
    }

    //check if all three values are correct
    if ((playerslot1 == 1) && (playerslot2 == 1) && (playerslot3 == 1)) {
      puzzlecorrect = 1;
    }
     
    // If the puzzle is solved, remove it and go to the next chapter data117
    if (puzzlecorrect == 1) {
      puzzlebox.innerHTML = "";
      nextid = "17";
      readnextdata();
    }
    else { // reset puzzle if it is not solved
      chapter.innerHTML = ("Enter three characters in the boxes below: <br><br>Incorrect, try again?");
    }
  }, false);
}
