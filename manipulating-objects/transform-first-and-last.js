// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value.

// Input (Array):
// var array = ['GUVI', 'I', 'am', 'Geek'];

// Output:
// var object = {
// GUVI : 'Geek'
// }

function transformFirstAndLast(object) {
  const key = object[0];
  const value = object.at(-1);

  console.log({ [key]: value });
  return { [key]: value };
}

transformFirstAndLast(["GUVI", "I", "am", "Geek"]);
