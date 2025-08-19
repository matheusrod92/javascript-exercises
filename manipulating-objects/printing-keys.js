// Write a function called "printAllKeys" which returns an newArray of all the input object’s keys.

// Example Input:
// {name : 'RajiniKanth', age : 25, hasPets : true}

// Example Output:
// ['name', 'age', 'hasPets']

function printAllKeys(newArray) {
  console.log(Object.keys(newArray));
  return Object.keys(newArray);
}

printAllKeys({ name: "RanjiniKanth", age: 25, hasPets: true });
