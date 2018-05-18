// Project Rubric:

// https://review.udacity.com/#!/rubrics/591/view

//There should be 1 2 3 4 5 6 7 8

//Check out this for a working example, http://fabiolavieyra.com/blog/memory-game

//Store the section id in the variable in order to generate the rows and cols
const gameArea = document.getElementById('game');

console.log(gameArea);

function Character (name, picture) {
  this.name = name;
  this.picture = picture;
}

const jeremy = new Character ("Jeremy Corbyn", "jeremy2.jpg");
const tom = new Character ("Tom Watson", "jeremy2.jpg");
const john = new Character ("John McDonnell", "jeremy2.jpg");
const diane = new Character ("Diane Abbott", "jeremy2.jpg");
const emily = new Character ("Emily Thornberry", "jeremy2.jpg");
const dawn = new Character ("Dawn Butler", "jeremy2.jpg");
const shami = new Character ("Shami Chakrabarti", "jeremy2.jpg");
const ashworth = new Character ("Jonathan Ashworth", "jeremy2.jpg");

const allCharacters = [
  jeremy, tom, john, diane, emily, dawn, shami, ashworth
];

//Build the intro row and col to store game information later
const int = document.createElement("DIV");
int.className = "row text-center p-3";

const intCol = document.createElement("DIV");
intCol.className = "col";

const newPara = document.createElement("P");
newPara.className = "p-2";

const button = document.createElement("button");
button.className = "btn btn-danger"
const buttonContet = document.createTextNode("PLAY THE MEMORY GAME");


button.appendChild(buttonContet);
newPara.appendChild(button);
intCol.appendChild(newPara);

int.appendChild(intCol); //add the col to the row

gameIntro.appendChild(int); //add the row to the section above the grid



function respondToTheClick(evt){
  //So addClass is jQuery so we convert the evt from js to Jaqery then use the addClass feature. VERY COOL1
  $(evt.target).click(function respondToTheClick(evt){
        $(evt.target).toggleClass("front");
    });
};

function buildGame() {


  for (let row = 0; row < 4; row++) {
    let newRow = document.createElement("DIV");
    newRow.className = "row text-center p-3";

    for (let col = 0; col < 4; col++){
      let newCol = document.createElement("DIV");
      newCol.className = "col card mr-2";
      newCol.addEventListener('click', respondToTheClick);
      newRow.appendChild(newCol);

    };

    gameArea.appendChild(newRow);

  }
}


buildGame();

gameArea.addEventListener('click', respondToTheClick);
