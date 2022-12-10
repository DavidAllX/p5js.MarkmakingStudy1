//David All, @DavidAll, #DavidAll6016
//The Essence of Storytelling
//Markmaking is personal, intentional and a lifetime craft. The same is true of storytelling. For this generative art sketch, I referenced primitive storytellers that lit a fire in a cave to share laughter, tales of great hunts and ideas for their future. Marks were made to tell stories with shadows projected to cave walls and organic materials made marks longer-lasting. Today, markmaking with code can embody ephemeral experiences and organic properties. With this exercise, I used P5js to digitally craft, carve and perhaps shadow-cast, a story. To achieve my purpose, I expressed with textures, shapes, patterns, false dimension shift and transformation. At first, the program paints a broad stroke to capture the listeners attention. With patience, the program reveals a deeper meaning through a second softer mark; a shadow cast on the wall, ancient marks remaining in a cave, or even the concept of a lasting impact of one's own life story. Though the canvas is 2-dimensional by design, a sculptural object reliably takes shape. Choices I made include contrasting backgrounds with rich paints and experimenting with various methods to combine into a textured stroke. I achieved ephemerality with randomness, with seeds like Random() and Noise() and carefully selected palettes with a range for the program to choose from. Each experience is unique to the listener. A conditional statement was used to delay the start of the essence of the story -- painted with a dragged pixel moved by Noise(). This adds subtly, and its disorientation adds a new vantage point as it appears above, behind, or intwined. Given my novice skills, I aimed to keep the program simple, constrained to code I am starting to understand, and a concept to build upon. 

//ISSUES && IDEAS TO EXPLORE 
// (1)Code receives an error in console, yet works as expected: fill(random(_theme.colors, Array[4])); (2) Mapping color palette throughout the broad stroke to add 'life moments'; (3) Not limiting colors to Setup(); (4) Create light affect to cast shadows.


//thanks to 0x113, imgreg.eth, trad0r and the Mathcastles Computing Arts fam!

// USE
// ✓   at least one conditional statement
// ✓   random() or noise()
// ✓   a small color palette that you build by sampling from any artwork
// ✓   bonus: createCanvas(), translate(), and/or rotate()
// ✓   bonus: use 2 or more palettes and switch between them

const THEME = [
  {
    name: "Tug Boat",
    bg: ["#050A30"],
    stroke: ["#264FAC"],
    colors: ["#fed9b7", "#00afb9", "#fdfcdc", "#0081a7", "#f07167"],
  },
  {
    name: "Something Human",
    bg: ["#597D80"],
    stroke: ["#E17A65"],
    colors: ["#E2DFDB", "##F5F5F5", "#C35947", "#ffffff", "#fdfcdc"],
  },
  {
    name: "Fly Eater",
    bg: ["#9C9495"],
    stroke: ["#B3F01F"],
    colors: ["#264FAC", "#f00c93", "#D43A91", "#2FF3E0", "#050A30"],
  },
];

let t = 0;

function setup() {
  createCanvas(800, 800);
  const _theme = random(THEME);
  stroke(_theme.stroke[0]);
  fill(random(_theme.colors, Array[4]));
  strokeWeight(0.25);
  background(_theme.bg[0]);
  let seed = random(100000);
  noiseSeed(seed);
}

function draw() {
  let x = noise(t) * width;
  let y = noise(t + 10) * width;

  //paint essence
  if (t > 1) {
    point(y + PI, x / PI);
  }

  //paint broad stroke
  arc(x, y, 30, 10, 0, PI);
  point(x, y);

  t = t + 0.002;
  //console.log(t);
}