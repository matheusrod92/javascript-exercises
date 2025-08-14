const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
characters.map((character) => character.name);

//2. Get array of all heights
characters.map((character) => character.height);

//3. Get array of objects with just name and height properties
characters.map(character => ({ name: character.name, height: character.height }));

//4. Get array of all first names
characters.map((character) => (`${character.name.split(' ')[0]}`))

//***REDUCE***
//1. Get total mass of all characters
characters.reduce((acc, character) => acc + character.mass, 0);

//2. Get total height of all characters
characters.reduce((acc, character) => acc + character.height, 0);

//3. Get total number of characters by eye color
characters.reduce((acc, character) => {
  acc[character.eye_color] = (acc[character.eye_color] || 0) + 1;
  return acc;
}, {});

//4. Get total number of characters in all the character names
characters.reduce((acc, character) => { acc + character.name.length }, 0);

console.log(totalCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
characters.filter((character) => character.mass > 100)

//2. Get characters with height less than 200
characters.filter((character) => character.height < 200)

//3. Get all male characters
characters.filter((character) => character.gender === 'male')

//4. Get all female characters
characters.filter((character) => character.gender === 'female')

//***SORT***
//1. Sort by mass
characters.sort((character1, character2) => character1.mass - character2.mass)

//2. Sort by height
characters.sort((character1, character2) => character1.height - character2.height)

//3. Sort by name
characters.sort((character1, character2) => character1.name.localeCompare(character2.name))

//4. Sort by gender
characters.sort((character1, character2) => character1.gender.localeCompare(character2.gender))

//***EVERY***
//1. Does every character have blue eyes?
characters.every(character => character.eye_color === 'blue')

//2. Does every character have mass more than 40?
characters.every(character => character.mass > 40)

//3. Is every character shorter than 200?
characters.every(character => character.height < 200)

//4. Is every character male?
characters.every(character => character.gender === 'male')

//***SOME***
//1. Is there at least one male character?
characters.some(character => character.gender === 'male')

//2. Is there at least one character with blue eyes?
characters.some(character => character.eye_color === 'blue')

//3. Is there at least one character taller than 210?
characters.some(character => character.height > 210)

//4. Is there at least one character that has mass less than 50?
characters.some(character => character.mass < 50)
