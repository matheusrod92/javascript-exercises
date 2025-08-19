// Write a function called "printAllValues" which returns an newArray of all the input object’s values.

// Example Input (Object):
// var object = {name: "RajiniKanth", age: 33, hasPets : false};

// Example Output:
// ["RajiniKanth", 33, false]

function printAllValues(newArray) {
  console.log(Object.values(newArray));
  return Object.values(newArray);
}

printAllValues({ name: "RajiniKanth", age: 33, hasPets: false });
