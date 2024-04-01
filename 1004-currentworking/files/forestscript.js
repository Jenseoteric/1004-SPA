console.log("check in");
var thisid;
var thistext;
//var thisoption1;
var option1;
var option2;
var nextid;
var chapterimage = document.getElementById("chapterimage");
var chapter = document.getElementById("chapter");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var invlist = document.getElementById("inv");
var linebreak = document.getElementsByClassName("br");
var isitspecial;
var key;
var lighter;
var candle;
var addtext;
var solved;
var creature;

// load all scripts when ready

document.addEventListener("DOMContentLoaded", function() {
  readinitialdata();
});


// first chapter load

function readinitialdata() {
  thisid = data100;
  thistext = thisid.text;
  console.log(thisid);
  chapter.innerHTML = thistext;
  option1 = thisid.optionkey1;
  option2 = thisid.optionkey2;
  button1.innerHTML = thisid.button1txt;
  button2.innerHTML = thisid.button2txt;
  myimage = thisid.image;
  chapterimage.src = "images\/" + myimage;
}

// button selector

playerchoice1 = document.getElementById("button1");
playerchoice1.addEventListener("click", () => { 
  nextid = option1;
  readnextdata();
})

playerchoice2 = document.getElementById("button2");
playerchoice2.addEventListener("click", () => {
  nextid = option2;
  readnextdata();
})

//
//
//
//cheatcode section
var cheatform = document.getElementById("cheatform");
console.log(cheatform);
cheatform.addEventListener("submit", () => {
   var cheatcode = document.getElementById("cheatcode").value;
   console.log(cheatcode);
   nextid = eval(cheatcode);
   readnextdata();
})

// load story chapters

function readnextdata() {
  thisid = eval(nextid);
  
  // new code test for special chapters
  isitspecial = thisid.isSpecial; // check if chapter has a special condition 
  if (isitspecial == 1) {
    doSpecial();
  }
  else  {

  // regular code without special chapter
  console.log(thisid);
  thistext = thisid.text;
  option1 = thisid.optionkey1;
  option2 = thisid.optionkey2;
  chapter.innerHTML = thistext;
  button1.innerHTML = thisid.button1txt;
  button2.innerHTML = thisid.button2txt;
  myimage = thisid.image;
  chapterimage.src = "images\/" + myimage;
  } // remove this curly bracket if getting rid of special chapters code

}


function doSpecial() {
  console.log(thisid);
  let trimid = thisid.id.substr(4); // trimming the id string to just integers
  let checkid = eval(trimid); // casting to integer variable to evaluate in switch
  thistext = thisid.text;
  option1 = thisid.optionkey1;
  option2 = thisid.optionkey2;
  button1.innerHTML = thisid.button1txt;
  button2.innerHTML = thisid.button2txt;

  switch(checkid) {

  case 101:
    option1 = data102;
    option2 = data103;
    if (key) { // if the variable is found
      option1 = data108;
      button1.innerHTML = "Go back to the strange door";
    }
    if (lighter) {
        option1 = data119;
    }
    break; 

  case 102:
    lighter = 1;
    invlist.innerHTML += "<li>lighter</li>";
    break;

  case 108:
    option1 = data111;
    if (key) {
      option1 = data112;
    }
    break;

  case 109:
    creature = 1;
    invlist.innerHTML += "<li>creature</li>";
    break;

  case 110:
    option2 = data114;
    if (key) {
      option1 = data109;
      option2 = data113;
      if (creature) {
        option1 = data118;
      }
    }
    break;

  case 111:
    candle = 1;
    invlist.innerHTML += "<li>candle</li>";
    break;

  case 114:
    if (candle) {
      if (lighter) {
        option2 = data115;
        button2.innerHTML = "Light the candle";
      }
    }
    break;

  case 115:
    option1 = data110;
    option2 = data116;
    if (key) {
      option2 = data113;
      button2.innerHTML = "Go to the bedroom";
    }
    break;
  
  case 116:
    var solved = 0;
    if (solved) {
      option1 = data117;
      button1.innerHTML = "Solve the puzzle";
    }
    break;

  case 117:
    key = 1;
    invlist.innerHTML += "<li>key</li>";
    break;


  case 120:
    option1 = data102;
    option2 = data103;
    if (key) { // if the variable is found
      option1 = data108;
      button1.innerHTML = "Go back to the strange door";
    }
    if (lighter) {
        option1 = data119;
    }
    break; 







    //create a form puzzle
    //var puzzle = document.createElement ("form");
   // puzzle.setAttribute("id", "puzzle");
   // var box1 = document.createElement("input");
   // box1.setAttribute("id", "box1");
   // puzzle.appendChild(box1);
    //chapter.appendChild(puzzle);

//!!!!!!!i am here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// work out how to take a single character as input
// make this into a separate puzzle function so it can append properly
// check input against chars to win/lose

  default:
    console.log("do nothing special");
  }
  
  chapter.innerHTML = thistext;
  myimage = thisid.image;
  chapterimage.src = "images\/" + myimage;
}