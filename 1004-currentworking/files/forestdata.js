// store all story cards here

var data100 = {
  id: "data100",
  text: "You have been driving your truck for hours now, and as you feel like youre about to get ready to stop and sleep soon, some beast dashes into the way with a screech, and you instinctually turn your wheel and end up in a destructive car crash.", 
  image: "start.png ",
  optionkey1: "data101",
  optionkey2: "data101",
  button1txt: "Open your eyes",
  button2txt: "Open your eyes",
  isSpecial: "",
  addtext: "",
  notefordev: "grey out option2"
}

var data101 = {
  id: "data101",
  text: "After an unknown amount of time, you wake up to a brutal wreck of your truck in the forest, you are in a state of shock and delirium, but the sight of a trail of yellow liquid catches your focus", 
  image: "truckwreck.jpg", 
  optionkey1: "data102",
  optionkey2: "data103",
  button1txt: "Search the wreckage",
  button2txt: "Follow the trail of mysterious liquid",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt1 nolighter +nokey = data102 or nolighter +yeskey = data119; opt1 yeslighter+yeskey = data108; opt2 = data103"
}

var data102 = {
  id: "data102",
  text: "You find your phone, but see that it is seemingly irreperably damaged, however, in the glove compartment, you find a lighter, which you figure may be useful in the future", 
  image: "findlighter.jpg", 
  optionkey1: "data103",
  optionkey2: "data103",
  button1txt: "Follow the trail of mysterious liquid",
  button2txt: "Follow the trail of mysterious liquid",
  isSpecial: "1",
  addtext: "",
  notefordev: "inv+ lighter, inv+ Broken Phone, grey out option2"
}

var data103 = {
  id: "data103",
  text: "After a while of nervously following the orange trail, it stops at a wild block of foliage, with orange drops coating the green", 
  image: "foliagetrail.jpeg", 
  optionkey1: "data104",
  optionkey2: "data105",
  button1txt: "Search the foliage",
  button2txt: "Keep going uphill",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data104 = {
  id: "data104",
  text: "Hidden underneath and behind the foliage, is a boulder, lit with two candles, with the letter \"I\" eerily painted on the surface. ", 
  image: "boulder.jpeg", 
  optionkey1: "data103",
  optionkey2: "data103",
  button1txt: "Go back to the trail",
  button2txt: "Go back to the trail",
  isSpecial: "1",
  addtext: "",
  notefordev: "grey out option2"
}

var data105 = {
  id: "data105",
  text: "You continue to hike through the woods, and it has bought you to an uphill clearing that glows with moonlight, as you search the horizon for any sign of help, you find yourself more hopeless than previously thought, as treetops stretch out forever.", 
  image: "clearing.jpeg", 
  optionkey1: "data106",
  optionkey2: "data101",
  button1txt: "Go to the clearing",
  button2txt: "Go back to the wreckage",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data106 = {
  id: "data106",
  text: "The clearing is lit with three candles, and the character \"T\" is clumsily skidded on the ground. Ahead are two paths, one stretches out through a claustrophobic, winding, forested path, the other path looks more tame, is paved with gravel and looks like it might lead less far into the woods", 
  image: "threecandles.png", 
  optionkey1: "data107",
  optionkey2: "data108",
  button1txt: "Take the forested path",
  button2txt: "Take the gravel path",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data107 = {
  id: "data107",
  text: "After trekking through this path, all along the way trying to remember how to pathfind back to what was your truck, you spot a cabin, with no signs of life within, with windows just as dark as the night sky.", 
  image: "cabinoutside.jpg", 
  optionkey1: "data106",
  optionkey2: "data110",
  button1txt: "Go back to the clearing",
  button2txt: "Enter the cabin",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data108 = {
  id: "data108",
  text: "After trodding through this path, it seems to have led you back to the highway you crashed on, and as you squint into the distance you can see the gore that once your truck in the road, but something bizarre catches your eye, you notice a stationary door just standing still on the other side of the road.", 
  image: "mysterydoor.jpg", 
  optionkey1: "data111",
  optionkey2: "data120",
  button1txt: "Examine the door",
  button2txt: "Go back to your truck",
  isSpecial: "1",
  addtext: "",
  notefordev: "op1 nokey=data111, yeskey=data112; opt2 data101"
}



var data109 = {
  id: "data109",
  text: "As you step outside, just as you are about to inhale the fresh night air, you see something moving on the path you came from recently, and you realise it is a very strange, horrifying looking man, or some kind of beast that could be mistaken for one. It is wearing some kind of contraption on it\'s head, and it looks poised to pounce and attack you.",
  image: "monstercabin.jpg", 
  optionkey1: "data130",
  optionkey2: "data131",
  button1txt: "Run from the monster",
  button2txt: "Attack the monster",
  isSpecial: "",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}

var data110 = {
  id: "data110",
  text: "You open the cabin door, hoping there might be something or someone to help you, but as you open the creaky, rotting door, the lights within the house turn on automatically, which was not something you had expected from a cabin that looks like it was built a long time ago. You walk into what seems to be the main room of the cabin, and you notice this strange painting on the wall that shows a boy holding a single lit candle on a bed, with the letter \"L\" imprinted into the corner of the portrait.", 
  image: "mainroom.jpg", 
  optionkey1: "data110",
  optionkey2: "data114",
  button1txt: "Go back outside",
  button2txt: "Go to the bedroom",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt1 yeskey yescreature = data118, yeskey nocreature = data109; opt2 yeskey = data113, nokey = data114"
}

var data111 = {
  id: "data111",
  text: "Even though you can see the back of this door, and how it leads to nothing, you are compelled to try and open it anyway, but the door is locked. You notice a candle holder next to the handle.", 
  image: "candleholder.jpg", 
  optionkey1: "data106",
  optionkey2: "data120",
  button1txt: "Go back to the clearing",
  button2txt: "Go back to your truck",
  isSpecial: "1",
  addtext: "",
  notefordev: "inv+ candle"
}

var data112 = {
  id: "data112",
  text: "You scramble for your key, and as you twist the key into the door, you hear a satisfying loud thud within the door, and as you open it, this mystical blue light eminates from the door, as you see this fantastic sight, you run around to look at the back of the door, only to see the regular scenery through the open door. As you go back to the front of the door, you take a deep breath as if you were to take a dive into water, and you walk into the sparkling light of this magic door.", 
  image: "magicdoor.jpg", 
  optionkey1: "data112",
  optionkey2: "data112",
  button1txt: "You have completed this level",
  button2txt: "You have completed this level",
  isSpecial: "1",
  addtext: "",
  notefordev: "end of level, options undecided"
}

var data113 = {
  id: "data113",
  text: "The light from the candle reveals a secret hatch in the ground on the other side of the room.", 
  image: "hatchopen.jpg", 
  optionkey1: "data116",
  optionkey2: "data110",
  button1txt: "Go through the hatch",
  button2txt: "Go to the main room",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data114 = {
  id: "data114",
  text: "You walk through the only unlocked door in the cabin, which leads to what you imagine is a bedroom, but its very, very dimly lit, which is making you worry if you're alone in this room", 
  image: "darkbedroom.jpg", 
  optionkey1: "data110",
  optionkey2: "data110",
  button1txt: "Go to the main room",
  button2txt: "Go to the main room",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt1 yescandle+lighter or nocandle+lighter = data, opt2 yescandle+lighter = data115 or nocandle+lighter = grey out"
}

var data115 = {
  id: "data115",
  text: "The light from the candle reveals some more detail about the room, and you are shocked by the sounds of stone turning and scraping across the floor as a secret hatch opens up in the ground on the other side of the room. ", 
  image: "hatchopen.jpg", 
  optionkey1: "data110",
  optionkey2: "data116",
  button1txt: "Go back to the main room",
  button2txt: "Go through the hatch",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt1 yeskey and nokey = data113, opt2 nokey only = data116 or grey out"
}

var data116 = {
  id: "data116",
  text: "Crawling through this hatch reveals an odd and eerie shrine of a monkey, within the monkeys hand is a safe lock combination mechanism, which contains letters, instead of the usual numbers.", 
  image: "monkeypuzzle.jpg", 
  optionkey1: "data113",
  optionkey2: "data117",
  button1txt: "Go back to the bedroom",
  button2txt: "Solve the puzzle",
  isSpecial: "1",
  addtext: "",
  notefordev: "puzzle! opt1 solved = data117, opt2 quit = data115"
}

var data117 = {
  id: "data117",
  text: "Full of anticipation, you input the last letter, and the monkey's mouth gapes open, and within it holds a key.", 
  image: "monkeykey.jpg", 
  optionkey1: "data121",
  optionkey2: "data121",
  button1txt: "Go back to the bedroom",
  button2txt: "Go back to the bedroom",
  isSpecial: "1",
  addtext: "",
  notefordev: "+key in inventory, grey out opt2"
}

var data118 = {
  id: "data118",
  text: "", 
  image: "", 
  optionkey1: "data106",
  optionkey2: "data106",
  button1txt: "Go to the clearing",
  button2txt: "Go to the clearing",
  isSpecial: "1",
  addtext: "",
  notefordev: "grey out option2"
}

var data119 = {
  id: "data119",
  text: "You search for anything else you could possibly use from the wreckage, but you are left with nothing.", 
  image: "findlighter.jpg", 
  optionkey1: "data103",
  optionkey2: "data103",
  button1txt: "Follow the trail of mysterious liquid",
  button2txt: "Follow the trail of mysterious liquid",
  isSpecial: "",
  addtext: "",
  notefordev: "opt2 greyed out"
}

var data120 = {
  id: "data120",
  text: "You have arrived back at the wreckage of your truck.", 
  image: "truckwreck.jpg", 
  optionkey1: "data102",
  optionkey2: "data103",
  button1txt: "Search the wreckage, again",
  button2txt: "Follow the trail of mysterious liquid, again",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt1 nolighter +nokey = data102 or nolighter +yeskey = data119; opt1 yeslighter+yeskey = data108; opt2 = data103"
}

var data121 = {
  id: "data121",
  text: "As you crawl out of the hatch with the Monkey themed puzzle, you look behind you, and to your surprise, where was a hole in the wall, is now just a flawless, flat continuation of the rotten wallpaper. You walk hastily back into the main room, but on the way, a door catches your eye, a door you're not sure was there when you came into the bedroom.",
  image: "closedhatchbedroom.jpg", 
  optionkey1: "data122",
  optionkey2: "data123",
  button1txt: "Open the mysterious door",
  button2txt: "Continue to main room",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

var data122 = {
  id: "data122",
  text: "You take a few steps towards the door, and you place your hand upon the ornate round metal handle, but as you twist your wrist to push open the door, you notice that its locked shut.", 
  image: "strangedoor.jpg", 
  optionkey1: "data124",
  optionkey2: "data123",
  button1txt: "Unlock the door with the Monkey Key",
  button2txt: "Give up and continue to main room",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

var data123= {
  id: "data123",
  text: "You return to the main room, and your eyes return to the painting on the wall of the boy with the candle, and your mind is filled with questions, like how is this possible, and who might have set this up?",
  image: "mainroom.jpg  ", 
  optionkey1: "data109",
  optionkey2: "data109",
  button1txt: "Leave the cabin",
  button2txt: "Leave the cabin",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

var data124= {
  id: "data124",
  text: "You pull the Monkey Key from your pocket, and attempt to unlock the door with the key, but as you insert the key, you realise this key does not fit the lock. You get a sudden electric shock, and for whatever reason the words \"Use the key well, and you may find yourself here again in the future\" manifest in your mind.",
  image: "doormessage.jpg", 
  optionkey1: "data125",
  optionkey2: "data123",
  button1txt: "Attempt to force the door open by bashing it down",
  button2txt: "Return to main room",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

var data125= {
  id: "data125",
  text: "In an act of frustration, you take a few steps back, and ram into the door to attempt to knock it off it\'s hinges, as you do this, the door collapses, and you fall into the room, only you never land on the ground, as you now find yourself free falling through a dank, seemingly endless space. You begin to lose consciousness, and the last thought you have is \"why would anyone build this room!?\"",
  image: "void.jpg", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "Game Over",
  button2txt: "Game Over",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

/*
var data126 = {
  id: "data126",
  text: "Where do you go to hide?",
  image: "", 
  optionkey1: "data128",
  optionkey2: "data129",
  button1txt: "In the grass",
  button2txt: "Inside the cabin",
  isSpecial: "1",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}
*/

/* var data128 = {
  id: "data128",
  text: "You scatter to the  side of the cabin and lay down flat in the longest grass you can find. As the man approaches the cabin",
  image: "", 
  optionkey1: "data128",
  optionkey2: "data129",
  button1txt: "In the grass",
  button2txt: "Inside the cabin",
  isSpecial: "1",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}
*/
 var data130 = {
  id: "data130",
  text: "You sprint past the beast through the path you came from, and you hear the thud of footsteps as the beast pursues you, however, no matter how fast you run, the beast manages to outpace you, and you are soon caught, and eaten. ",
  image: "imgdata999.jpg", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "Game Over",
  button2txt: "Game Over",
  isSpecial: "",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}


var data131 = {
  id: "data131",
  text: "You notice a hefty rock placed on the fence just to right, the beast suddenly lunges at you, in a terrified panic, you reach over for the boulder with both hands and smack the beast's strange headpiece. An ear splitting *CLANG* sounds and echoes from the forest around you, the monster clasps it's face with it's hands, giving you a moment to escape.",
  image: "monsterbash.jpg", 
  optionkey1: "data132",
  optionkey2: "data132",
  button1txt: "Continue",
  button2txt: "Continue",
  isSpecial: "1",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}

var data132 = {
  id: "data132",
  text: "You run as fast as you can down the path for what feels like forever, and your body is aching with pain, you come across the divergence in the paths you came by earlier, you must think fast before the monster catches up to you",
  image: "2paths.png", 
  optionkey1: "data134",
  optionkey2: "data133",
  button1txt: "Run to the clearing",
  button2txt: "Run through the Gravel Path",
  isSpecial: "",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}

var data133 = {
  id: "data133",
  text: "You commit to running down the path that goes down towards the road, and as you make it to the concrete of the highway, unsure what to do, you remember the door you had seen earlier, and are compelled to try to unlock it with the key you found from the Monkey statue. As the key fits in the lock, a fantastic light eminates from the cracks of the door, as you swing it open, you see that it is a magical portal. As you hesitate to enter the unknown inside of the door, you hear the beast has your trail, and will catch you soon, so you are left with no choice.",
  image: "magicdoor.jpg", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "End of chapter 1",
  button2txt: "End of chapter 1",
  isSpecial: "",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}

var data134 = {
  id: "data133",
  text: "You commit to running down the path that leads to the clearing, but you notice as you run uphill, that the beast is now catching up to you, and even if you reach the clearing, there is nowhere to hide.",
  image: "imgdata999.jpg", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "Game Over",
  button2txt: "Game Over",
  isSpecial: "1",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"
}

var data135 = {
  id: "data135",
text: "As you open the cabin door, you feel the contrast of the night breeze against the thick humidity and dust that was present in the cabin. You take a look around, and notice a terrifying beast staring at you from a branch from above. As you step outside, just as you are about to inhale the fresh air, you see something moving on the path you came from recently, you take a second to focus on it and figure out what it is, and you realise it is a man walking towards the cabin door! ... But the man looks extremely strange, not like anything you've seen before, and it seems to be holding a large tool or weapon, limping and wearing a strange contraption on it's head. You feel very wary of this man, and it looks to be quite dangerous.",
  image: "", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "Game Over",
  button2txt: "Game Over",
  isSpecial: "0",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"

}

var data999 = {
  id: "data999",
text: "GAME OVER",
  image: "imgdata999.jpg", 
  optionkey1: "data999",
  optionkey2: "data999",
  button1txt: "Game Over",
  button2txt: "Game Over",
  isSpecial: "0",
  addtext: "",
  notefordev: "creature encounter! nothing set yet"

}