// Project Rubric:

// https://review.udacity.com/#!/rubrics/591/view

//There should be 1 2 3 4 5 6 7 8

//Check out this for a working example, http://fabiolavieyra.com/blog/memory-game

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}







const gameArea = document.getElementById('game');

function Character (name, picture) {
  this.name = name;
  this.picture = picture;
}

const jeremy = new Character ("Jeremy Corbyn", "jeremy.jpg");
const tom = new Character ("Tom Watson", "tom.jpg");
const john = new Character ("John McDonnell", "john.jpg");
const diane = new Character ("Diane Abbott", "diane.jpg");
const emily = new Character ("Emily Thornberry", "emily.jpg");
const dawn = new Character ("Dawn Butler", "dawn.jpg");
const shami = new Character ("Shami Chakrabarti", "shami.jpg");
const ashworth = new Character ("Jonathan Ashworth", "jonathan.jpg");

const allCharacters = [
  jeremy, tom, john, diane, emily, dawn, shami, ashworth
];

const rand = shuffle(allCharacters);

console.log(rand[1])

/*
const allCharacters = {
  Jeremy: {
    name: "Jeremey Corbyn",
    image: "jeremey.jpg"
  },
  tom: {
    name: "Tom Watson",
    image: "tom.jpg"
  },
  john: {
    name: "John McDonnell",
    image: "john.jpg"
  }
}

console.log(allCharacters)

*/

//Build the intro row and col to store game information later
const int = document.createElement("DIV");
int.className = "row text-center p-3";

const intCol = document.createElement("DIV");
intCol.className = "col";

const newPara = document.createElement("P");
newPara.className = "p-2";


intCol.appendChild(newPara);

int.appendChild(intCol); //add the col to the row

gameIntro.appendChild(int); //add the row to the section above the grid


function buildGame() {


  for (let row = 0; row < 4; row++) {
    let newRow = document.createElement("DIV");
    newRow.className = "row text-center p-3 " + row;

    for (let col = 0; col < 4; col++){
      let newCol = document.createElement("DIV");
      newCol.className = "col card mr-4 " + col + row;//the last two adds col and row are just to generate a unique class name
      //Okay this is not the best for performance, but its add the toggle class function to each col
      $(newCol).click(function(evt){
            $(newCol).toggleClass("front");
      });


      newCol.innerHTML = rand.name + "<br>" + rand.picture;

      newRow.appendChild(newCol);

    };

    gameArea.appendChild(newRow);

  }
}

//allCharacters.forEach(function(character, i) {

  //console.log(character.name)

    //let newCharacter = document.createElement("P");
    //newCharacter.textContent += character.name;
    //console.log(newCharacter);

    //newCol.append(newCharacter);
  //});
