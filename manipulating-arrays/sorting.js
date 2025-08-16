// Here is some extra practice work for javascript arrays and objects.
const data = [
  {
    id: 2,
    name: "Michael",
    address: {
      state: "CA",
      zip: 94501,
    },
  },
  {
    id: 1,
    name: "Kodi",
    address: {
      state: "CA",
      zip: 94502,
    },
  },
  {
    id: 5,
    name: "Trever",
    address: {
      state: "OR",
      zip: 97221,
    },
  },
  {
    id: 3,
    name: "Isaac",
    address: {
      state: "OR",
      zip: 97222,
    },
  },
];

// 0: Create a new array from the data array that returns the object and adds a city key with an empty string value, to the address object.
data.map((item) => {
  return {
    ...item,
    address: {
      ...item.address,
      city: "",
    },
  };
});

// 0b: Create a new array with the address flattened into the main object. Ie, move state and zip into parent object and remove address key. This is called flattening.
data.map((item) => {
  return {
    id: item.id,
    name: item.name,
    state: item.address.state,
    zip: item.address.zip,
  };
});

// 1: Sort the order of the objects in the array by id in ASC order.
data.sort((item1, item2) => item1.id - item2.id);

// 1b: Sort the order of the objects by the name in DESC order:
data.sort((item1, item2) => item2.id - item1.id);

// 2: Filter the array objects by address state "OR", then sort by id in ASC order. Hint, use chaining.
data
  .filter((item) => item.address.state === "OR")
  .sort((item1, item2) => item1.id - item2.id);

// 3: Sort the order of the objects in DESC order by address zip.
data.sort((item1, item2) => item2.address.zip - item1.address.zip);

// 4: Reduce this array to a single object with the keys being the id.
data.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

// 5: Reduce this array to a single object which groups the items by state which is an array. example // { OR: [], CA: [] }
data.reduce((acc, item) => {
  if (!acc[item.address.state]) {
    acc[item.address.state] = [];
  }
  acc[item.address.state].push(item);
  return acc;
}, {});
