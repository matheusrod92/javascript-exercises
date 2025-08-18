// Write a function called "convertObjectToList" which converts an object literal into an array of arrays.

// Input (Object):
// var object = {name: "ISRO", age: 35, role: "Scientist"};

// Output:
// [["name", "ISRO"], ["age", 35], ["role", "Scientist"]]

function convertListToObject(obj) {
  console.log(Object.entries(obj))
  return Object.entries(obj);
}

convertListToObject({ name: "ISRO", age: 35, role: "Scientist" });
