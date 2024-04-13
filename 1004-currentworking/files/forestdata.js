// store all story cards here
//change var to const
var data100 = {
  id: "data100",
  text: "You have been driving your truck for hours, and you feel your eyelids getting heavy. Suddenly something dashes into the road and in a panic, you spin your wheel and swerve... and everything goes black. ", 
  image: "start.jpg",
  imagealt: "The protagonist wearing a red plaid shirt, driving in a truck down a highway through a dense american forest.",
  optionkey1: "data101",
  optionkey2: "data101",
  button1txt: "Open your eyes",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable option2"
}

const data101 = {
  id: "data101",
  text: "An unknown amount of time later, you wake up surrounded by the brutal wreck of your truck. You are in a state of shock and delirium, but the sight of a trail of orange liquid catches your eye.", 
  image: "truckwreck.jpg",
  imagealt: "A highway in the middle of a dense forest at night, the wreckage of a truck is sprawled across the road.",
  optionkey1: "data102",
  optionkey2: "data103",
  button1txt: "Search the wreckage",
  button2txt: "Follow the trail",
  isSpecial: "1",
  addtext: "",
  notefordev: "if lighter then optionkey1 = data119"
}

const data102 = {
  id: "data102",
  text: "You find your phone but it is irreparably damaged. However, elsewhere in the glove compartment you find a lighter, which you figure may be useful in the future.", 
  image: "findlighter.jpg", 
  imagealt: "The protagonist's hand, wearing a red plaid shirt, searches a glove compartment and finds a broken phone and a cigarette lighter.",
  optionkey1: "data103",
  optionkey2: "data103",
  button1txt: "Follow the trail",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "inv+ lighter, inv+ Broken Phone, disable option2"
}

const data103 = {
  id: "data103",
  text: "You nervously follow the orange trail uphill, feeling extremely vulnerable as you make your way through the trees. The trail stops at a wild block of foliage, its' leaves smeared and splattered with the orange fluid.", 
  image: "foliagetrail.jpg", 
  imagealt: "The protagonist is in a dark forest. Their hand is holding a leaf splashed with bright orange liquid.",
  optionkey1: "data104",
  optionkey2: "data105",
  button1txt: "Search the foliage",
  button2txt: "Keep going uphill",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

const data104 = {
  id: "data104",
  text: "Hidden behind the foliage is a boulder lit with two candles. The letter \"I\" has been eerily engraved on its surface. ", 
  image: "boulder.jpg", 
  imagealt: "A large boulder engraved with the letter \"I\". Next to the boulder are two lit candles.",
  optionkey1: "data105",
  optionkey2: "data105",
  button1txt: "Keep going uphill",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable option2"
}

var data105 = {
  id: "data105",
  text: "You continue to hike through the woods until you reach the top of the hill. The forest glows with moonlight, but you find yourself feeling hopeless as the treetops seem to stretch out forever. As you search for any sign of hope, you notice a clearing amongst the trees.", 
  image: "clearing.jpg", 
  imagealt: "The night sky lights up a grassy clearing in a forest. The horizon is filled with trees and hills.",
  optionkey1: "data106",
  optionkey2: "data120",
  button1txt: "Go to the clearing",
  button2txt: "Go back to the wreckage",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data106 = {
  id: "data106",
  text: "The clearing is lit with three candles, and you find more of the orange luminescent fluid pooling inside the character \"T\" which has been etched into the ground. Ahead are two paths, one a is winding, forested path, the other path is paved with gravel.", 
  image: "threecandles.png", 
  imagealt: "A huge letter \"T\" etched on a grassy floor in a clearing. It is surrounded by three candles and glows orange. Two paths lead away from the clearing.",
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
  text: "You decide to walk down the forest path, but soon you begin to doubt your decision as the trees canopy overhead blocks out all moonlight. Just as you are losing hope, you stumble out of the undergrowth. Not too far ahead of you is a cabin. The windows are as dark as the night sky, and there are no signs of life within.", 
  image: "cabinoutside.jpg",
  imagealt: "A delapidated wooden cabin standing in the moonlight, surrounded by broken logs. Steps lead up to the cabin's door.",
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
  text: "You take the gravel path, and before long you find yourself back on the highway. Squinting into the distance you see the disaster that was once your truck, and you lament about how long it took you to afford it. As you turn your head a bizarre sight catches your eye on the opposite side of the road. Impossibly, a heavy wooden door stands alone amongst the trees.", 
  image: "mysterydoor.jpg", 
  imagealt: "A dirt path through long grass leading to a large wooden door which stands alone in a gloomy forest.",
  optionkey1: "data111",
  optionkey2: "data120",
  button1txt: "Examine the door",
  button2txt: "Go back to your truck",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data109 = {
  id: "data109",
  text: "As you step outside, ready to inhale the fresh night air, something moves in the darkness. It steps towards you revealing a creature with elongated limbs, sharp claws, and lizard-like eyes piercing you over the top of its evil grin. Despite its horrifying nature, it wears a comical contraption on its head, but you don't dare to laugh as the monster looks poised to pounce.",
  image: "monstercabin.jpg", 
  imagealt: "A humanoid monster with large hands and claws, dressed in burgundy rags and a strange rusty headgear which resembles an orange teapot. In the shadow under this helmet are two glinting eyes and a wide, evil grin.",
  optionkey1: "data130",
  optionkey2: "data131",
  button1txt: "Run from the monster",
  button2txt: "Attack the monster",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data110 = {
  id: "data110",
  text: "Nervously, you approach the cabin and push open the creaking rotten door. To your surprise a dim light flickers on automatically. You find yourself in a run down room with broken floorboards. It appears to be barely holding itself together. Curiously, a strange painting dominates one wall, depicting a boy holding a single lit candle, which illuminates the letter \"L\" in the corner of the portrait. There is another door here.", 
  image: "mainroom.jpg", 
  imagealt: "The interior of a decrepit wooden cabin. A large painting shows a boy holding a candle, with the letter \"L\" beside him.",
  optionkey1: "data137",
  optionkey2: "data114",
  button1txt: "Go back outside",
  button2txt: "Open the other door.",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data111 = {
  id: "data111",
  text: "You inspect both sides of the door curiously. Although it couldn't possibly lead anywhere, you are compelled to try and open it anyway. Unfortunately, the door is locked, but you notice a candle holder nearby, and take the candle.", 
  image: "candleholder.jpg", 
  imagealt: "An antique wooden candle holder holding the stub of a wax candle.",
  optionkey1: "data106",
  optionkey2: "data120",
  button1txt: "Go back to the clearing",
  button2txt: "Go back to your truck",
  isSpecial: "1",
  addtext: "",
  notefordev: "inv+ candle"
}

var data114 = {
  id: "data114",
  text: "The door leads to another room, but it is pitch black, and you cannot make out any detail. You are overwhelmed with a sharp sense of nyctophobia, and you fearfully wonder if there might be something here watching you.", 
  image: "darkbedroom.jpg", 
  imagealt: "A question mark engraved in wood.",
  optionkey1: "data136",
  optionkey2: "data115",
  button1txt: "Go to the main room",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "opt2 yescandle+lighter = data115, or nocandle+lighter = disable"
}

var data115 = {
  id: "data115",
  text: "The light from the candle reveals some more detail about the room, and you are shocked by the sounds of stone turning and scraping across the floor as a secret hatch opens up in the ground on the other side of the room. ", 
  image: "hatchopen.jpg", 
  imagealt: "A hand holding a lit candle in a wooden cabin bedroom. There is a hatch above the bed which is open, revealing a set of stairs.",
  optionkey1: "data136",
  optionkey2: "data116",
  button1txt: "Go back to the main room",
  button2txt: "Go through the hatch",
  isSpecial: "1",
  addtext: "",
  notefordev: "set lit +1; option2 if key then disable"
}

var data116 = {
  id: "data116",
  text: "You crawl through the hatch and find an odd and eerie statue of a monkey. The plynth on which it stands appears to hold a three slot combination lock. Your journey tonight has been unfathomably strange and you consider turning your back on the statue and walking away, however...", 
  image: "monkeypuzzle.jpg", 
  imagealt: "A statue of a monkey holding it's hands together, stood on a plynth which is adorned with puzzling engravings.",
  optionkey1: "data136",
  optionkey2: "data138",
  button1txt: "Go back to the main room",
  button2txt: "Break the combination",
  isSpecial: "1",
  addtext: "",
  notefordev: "puzzle! opt1 solved = data117, opt2 quit = data115"
}

var data117 = {
  id: "data117",
  text: "Full of anticipation, you input the last letter, and the monkey's mouth gapes open, and within it holds a key.", 
  image: "monkeykey.jpg", 
  imagealt: "A heavy iron key. The head of the key is shaped like a monkeys face",
  optionkey1: "data121",
  optionkey2: "data121",
  button1txt: "Go back to the bedroom",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "+key in inventory, disable option2 button"
}

var data119 = {
  id: "data119",
  text: "You search for anything else you could possibly use from the wreckage, but you are left with nothing.", 
  image: "findlighter.jpg", 
  imagealt: "The protagonist's hand, wearing a red plaid shirt, searches a glove compartment and finds a broken phone and a cigarette lighter.",
  optionkey1: "data103",
  optionkey2: "data103",
  button1txt: "Follow the trail",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data120 = {
  id: "data120",
  text: "You sigh deeply as you arrive back at the wreckage of your truck. Despite losing your truck, you know you are lucky to have survived the crash. You wonder again what could have left this otherworldly orange trail.", 
  image: "truckwreck.jpg", 
  imagealt: "A highway in the middle of a dense forest at night, the wreckage of a truck is sprawled across the road.",
  optionkey1: "data102",
  optionkey2: "data103",
  button1txt: "Search the wreckage",
  button2txt: "Follow the trail",
  isSpecial: "1",
  addtext: "",
  notefordev: "if lighter then option1 = data119"
}

var data121 = {
  id: "data121",
  text: "As you crawl out of the hatch with the Monkey themed puzzle, you look behind you, and to your surprise, where was a hole in the wall, is now just a flawless, flat continuation of the rotten wallpaper. You walk hastily back into the main room, but on the way, a door catches your eye, a door you're not sure was there when you came into the bedroom.",
  image: "closedhatchbedroom.jpg", 
  imagealt: "A dusty and abandoned bedroom in a wooden cabin.",
  optionkey1: "data122",
  optionkey2: "data123",
  button1txt: "Open the mysterious door",
  button2txt: "Continue to main room",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data122 = {
  id: "data122",
  text: "You take a few steps towards the door, and you place your hand upon the ornate round metal handle, but as you twist your wrist to push open the door, you notice that its locked shut.", 
  image: "strangedoor.jpg", 
  imagealt: "The interior of a decrepit wooden cabin. A strangely ornate door stands out against the broken wood walls.",
  optionkey1: "data124",
  optionkey2: "data123",
  button1txt: "Try the Monkey Key",
  button2txt: "Give up and go to main room",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data123= {
  id: "data123",
  text: "You return to the main room, and your eyes return to the painting on the wall of the boy with the candle, and your mind is filled with questions, like how is this possible, and who might have set this up?",
  image: "mainroom.jpg",
  imagealt: "The interior of a decrepit wooden cabin. A large painting shows a boy holding a candle, with the letter \"L\" beside him.",
  optionkey1: "data109",
  optionkey2: "data109",
  button1txt: "Leave the cabin",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data124= {
  id: "data124",
  text: "You pull the Monkey Key from your pocket, and attempt to unlock the door with the key, but as you insert the key, you realise this key does not fit the lock. You get a sudden electric shock, and for whatever reason the words \"Use the key well, and you may find yourself here again in the future\" manifest in your mind.",
  image: "doormessage.jpg", 
  imagealt: "A burst of red and purple electrical energy.",
  optionkey1: "data125",
  optionkey2: "data123",
  button1txt: "Force the door open",
  button2txt: "Return to main room",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data125= {
  id: "data125",
  text: "In an act of frustration, you take a few steps back, and ram into the door to attempt to knock it off it\'s hinges, as you do this, the door collapses, and you fall into the room, only you never land on the ground, as you now find yourself free falling through a dank, seemingly endless space. You begin to lose consciousness, and the last thought you have is \"why would anyone build this room!?\"",
  image: "void.jpg", 
  imagealt: "The protagonist looks down past their red plaid shirt and shoes as they fall into a dark void.",
  optionkey1: "data126",
  optionkey2: "data126",
  button1txt: "Continue",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data126 = {
  id: "data126",
  text: "GAME OVER! Just after dawn, a passerby finds the wreck of your truck. Local law enforcement begin to search the forest for you. Unfortunately, no trace of you is ever found.",
  image: "imgdata999.jpg", 
  imagealt: "Huge 3D red letters saying \"GAME OVER\"  on top of a crashed truck.",
  optionkey1: "data100",
  optionkey2: "data100",
  button1txt: "Play again?",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

var data127 = {
  id: "data127",
  text: "Thanks for playing, you have reached the end of this game. Three hours after you pass through the magic door, your truck is found, and the local law enforcement begin to search the forest in hopes of finding you. They find absolutely nothing unusual.",
  image: "thanksforplaying.jpg", 
  imagealt: "An iron key themed after a monkey in the sand, with a text panel saying \"THANKS FOR PLAYING.\".",
  optionkey1: "data100",
  optionkey2: "data100",
  button1txt: "Play again?",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: ""
}

 var data130 = {
  id: "data130",
  text: "You sprint past the beast, towards the path from where you came, hearing the thud of footsteps as the beast turns to pursue you. You try to push yourself faster and faster, but there is no escape. It's sharp claws capture your shoulders, and you are seized off the ground, and dragged away... to be eaten.",
  image: "monsterdeath2.jpg",
  imagealt: "A red plaid shirt, torn up and lying on the ground in a forest. An orange metal teapot is nearby.",
  optionkey1: "data126",
  optionkey2: "data126",
  button1txt: "Continue",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data131 = {
  id: "data131",
  text: "You notice a hefty rock placed on the fence just to right, the beast suddenly lunges at you, in a terrified panic, you reach over for the boulder with both hands and smack the beast's strange headpiece. An ear splitting *CLANG* sounds and echoes from the forest around you, the monster clasps it's face with it's hands, giving you a moment to escape.",
  image: "monsterbash.jpg", 
  imagealt: "The protagonists hand is holding a large rock which has been used to strike and dent a rusted orange teapot.",
  optionkey1: "data132",
  optionkey2: "data132",
  button1txt: "Continue",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data132 = {
  id: "data132",
  text: "You run as fast as you can down the path for what feels like forever, and your body is aching with pain, you come across the divergence in the paths you came by earlier, you must think fast before the monster catches up to you",
  image: "2paths.png", 
  imagealt: "Two paths running through a forest. On the left is a narrow, earthy path shaded by trees. On the right is a neat gravel path lit by moonlight.",
  optionkey1: "data134",
  optionkey2: "data133",
  button1txt: "Run to the clearing",
  button2txt: "Run down the gravel path",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data133 = {
  id: "data133",
  text: "You commit to running down the path that goes down towards the road, and as you make it to the concrete of the highway, unsure what to do, you remember the door you had seen earlier, and are compelled to try to unlock it with the key you found from the Monkey statue. As the key fits in the lock, a fantastic light eminates from the cracks of the door, as you swing it open, you see that it is a magical portal. As you hesitate to enter the unknown inside of the door, you hear the beast has your trail, and will catch you soon, so you are left with no choice.",
  image: "magicdoor.jpg", 
  imagealt: "The protagonist is opening a wooden door, and a bright, shimmering light is emanating from the open door.",
  optionkey1: "data127",
  optionkey2: "data127",
  button1txt: "Continue",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data134 = {
  id: "data133",
  text: "You commit to running down the path that leads to the clearing, but you notice as you run uphill, that the beast is now catching up to you, and even if you reach the clearing, there is nowhere to hide.",
  image: "monsterdeath2.jpg", 
  imagealt: "The words GAME OVER are displayed alongside an image of a wrecked truck lying across a forest road.",
  optionkey1: "data126",
  optionkey2: "data126",
  button1txt: "Continue",
  button2txt: "",
  isSpecial: "1",
  addtext: "",
  notefordev: "disable second option button"
}

var data136 = {
  id: "data136",
  text: "You return to the main room of the cabin, and your eyes return to the painting on the wall of the boy with the candle, and your mind is filled with questions, like how is this possible, and who might have set this up?",
  image: "mainroom.jpg",
  imagealt: "The interior of a decrepit wooden cabin. A large painting shows a boy holding a candle, with the letter \"L\" beside him.",
  optionkey1: "data137",
  optionkey2: "data114",
  button1txt: "Go back outside",
  button2txt: "Go back to the bedroom.",
  isSpecial: "1",
  addtext: "",
  notefordev: "if candle is lit then option2 = data115"
}

var data137 = {
  id: "data137",
  text: "As you leave the cabin, you are startled by the stark contrast of the crisp, night air to the dingy, decrepit atmosphere behind you. The night is pressing on, and you feel no closer to finding your way back to civilization. You wonder if you might have missed something on your search so far.",
  image: "cabinoutside.jpg", 
  imagealt: "A delapidated wooden cabin standing in the moonlight, surrounded by broken logs. Steps lead up to the cabin's door.",
  optionkey1: "data106",
  optionkey2: "data136",
  button1txt: "Go back to the clearing",
  button2txt: "Enter the cabin",
  isSpecial: "",
  addtext: "",
  notefordev: ""
}

var data138 = {
  id: "data138",
  text: "Enter three characters in the boxes below: ",
  image: "monkeypuzzle.jpg",
  imagealt: "A statue of a monkey holding it's hands together, stood on a plynth which is adorned with puzzling engravings.",
  optionkey1: "data136",
  optionkey2: "data121",
  button1txt: "Go back to the main room",
  button2txt: "solve the puzzle",
  isSpecial: "1",
  addtext: "",
  notefordev: "This is the puzzle"
}
