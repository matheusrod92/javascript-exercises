// 1. Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

// Expected Output:
// var object = {
//   make : 'Ford'
//   model : 'Mustang',
//   year : 1964
// }

function fromListToObject(arr) {
  const obj = {};
  arr.forEach((pair) => {
    const key = pair[0];
    const value = pair[1];
    obj[key] = value;
  });
  return obj;
}

fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);

// 2. Write a function called 'transformGeekData' that transforms some set of data from one format to another.

// Expected Output:
// [
//   {
//     firstName: 'Vasanth',
//     lastName: 'Raja',
//     age: 24,
//     role: 'JSWizard'
//   },
//   {
//     firstName: 'Sri',
//     lastName: 'Devi',
//     age: 28,
//     role: 'Coder'
//   }
// ]

function transformGeekData(arr) {
  const transformedData = arr.map((subArr) => fromListToObject(subArr));
  console.log(transformedData);
  return transformedData;
}

transformGeekData([
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
]);
