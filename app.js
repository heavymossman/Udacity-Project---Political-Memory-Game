// Project Rubric:

// https://review.udacity.com/#!/rubrics/591/view

//There should be 1 2 3 4 5 6 7 8

//Check out this for a working example, http://fabiolavieyra.com/blog/memory-game


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


console.log(allCharacters);
