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
let isitspecial; // triggers special cases
let key; // inventory item
let lighter; // inventory item
let candle; // inventory item
let lit; // triggered by lighting the candle
let addtext;

// welcome console log for players
console.log("Welcome to \"Forest Mystery\"");

// timer variables
let startTime = Date.now(); // gets start time on page load
let hours;
let minutes;
let seconds;
let millis;
let timetracker = document.getElementById("timetracker"); // "time passed" paragraph

// setting a paragraph of information to use in game endings
let infoline1 = "\"Forest Mystery\" by J. McEwan ©2024.";
let infoline2 = "Candle favicon by Starup Graphic Design, available from iconfinder.com/startupgraphicdesign and licenced as free for commercial use.";
let infopara = document.createElement("p");
infopara.setAttribute("style", "font-size: 14px ");
infopara.innerHTML = ("<br><i>" + infoline1 + "<br>" + infoline2 + "<\/i>");

// load all scripts when ready
document.addEventListener("DOMContentLoaded", function() {
  readinitialdata();
});

//
// TIMER CODE
//

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

//
// CHAPTER LOADING CODE
//

// first chapter load   
function readinitialdata() { 
  button2.disabled = true;
  button2.classList.add("disabled");
  thisid = data100;
  chapter.innerHTML = thisid.text;
  invlist.innerHTML = "Inventory: ";
  option1 = thisid.optionkey1;
  option2 = thisid.optionkey2;
  button1.innerHTML = thisid.button1txt;
  button2.innerHTML = thisid.button2txt;
  chapterimage.src = "images\/" + thisid.image; 
  chapterimage.alt = thisid.imagealt;
}

// button selectors
  button1.addEventListener("click", function() {
  nextid = option1;
  readnextdata();
}, false);

button2.addEventListener("click", function() {
  nextid = option2;
  readnextdata();
}, false);


//
//
//DEV TOOLS: cheatcode section, requires html element to be uncommented
/*
let cheatform = document.getElementById("cheatform");
console.log(cheatform);
cheatform.addEventListener("submit", () => {
var cheatcode = document.getElementById("cheatcode").value;
console.log(cheatcode);
nextid = eval(cheatcode);
readnextdata();
});
*/


// load story chapters
function readnextdata() {
  thisid = eval(nextid);
  button2.disabled = false;
  button2.classList.remove("disabled");

  // new code test for special chapters
  if (thisid.isSpecial == 1) {
    doSpecial();
  }
  else  {
  // regular code without special chapter
    option1 = thisid.optionkey1;
    option2 = thisid.optionkey2;
    chapter.innerHTML = thisid.text;
    button1.innerHTML = thisid.button1txt;
    button2.innerHTML = thisid.button2txt;
    chapterimage.src = "images\/" + thisid.image;
    chapterimage.alt = thisid.imagealt;  
  } 
}

// function to load special chapters
function doSpecial() {
  let trimid = thisid.id.substr(4); // trimming the id string to just integers
  let checkid = eval(trimid); // casting to integer variable to evaluate in switch
  option1 = thisid.optionkey1;
  option2 = thisid.optionkey2;
  button1.innerHTML = thisid.button1txt;
  button2.innerHTML = thisid.button2txt;
  chapter.innerHTML = thisid.text;
  chapterimage.src = "images\/" + thisid.image;
  chapterimage.alt = thisid.imagealt;

  switch(checkid) {

    case 100:
      timetracker.innerHTML = ""; 
      restartTimer();
      invlist.innerHTML = "Inventory: ";
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      candle = 0; // reset variables
      lighter = 0;
      lit = 0;
      key = 0;
      break;

    case 102:
      if (!lighter) {
        lighter = 1;
        invlist.innerHTML += " lighter,";
      }
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      break;

    case 104:
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      break;  
    
    case 107:
      if (lit) {
        option2 = data136;
      }
      break;

    case 111: // check if the candle already exists first!!!
      if (!candle) {
        candle = 1;
        invlist.innerHTML += " candle,";
      }
      break;
        
    case 114:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      if (candle) {
        if (lighter) {
          optionkey2 = "data115";
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
        button2.innerHTML = "";
        button2.classList.add("disabled");
        button2.disabled = true;
      }
      break;
  
    case 117:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      key = 1;
      invlist.innerHTML = "Inventory: Monkey Key";
      break;

    case 119:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      break;
    
    case 120:
      if (lighter) {
        option1 = data119;
      }
      break; 
    
    case 123:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      break;
    
    case 125:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      break;
    
    case 126:
      invlist.innerHTML = "";
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      chapter.appendChild(infopara); // add game information
      break;
    
    case 127:
      invlist.innerHTML = "";
      getTimeElapsed();
      let text = (hours + " hours, " + minutes + " minutes, " + seconds + " seconds");
      timetracker.innerHTML = ("<br>You completed this game in: " + text);
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      timetracker.appendChild(infopara); // add game information
      break;

    case 130:
      button2.innerHTML = "";
      button2.disabled = true;
      button2.classList.add("disabled");
      break;
    
    case 131:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      break;
    
    case 133:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      invlist.innerHTML = "";
      break;
    
    case 134:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      break;
    
    case 136:
      puzzlebox.innerHTML = ("");
      if (lit) {
        option2 = data115;
      }
      break;

    case 138:
      button2.innerHTML = "";
      button2.classList.add("disabled");
      button2.disabled = true;
      createPuzzle();
      break;

    default:
      console.log("Something unexpected has occurred.");
      break;
  }  
}

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
  //puzzlebox.appendChild(puzzlesubmit);

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
      nextid = data117;
      readnextdata();
    }
    else { // reset puzzle if it is not solved
      chapter.innerHTML = ("Enter three characters in the boxes below: <br><br>Incorrect, try again?");
    }
  }, false);
}
