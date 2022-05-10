// Here is some extra practice work for javascript arrays and objects.
const data = [
    {
      id: 2,
      name: 'Michael',
      address: {
        state: 'CA',
        zip: 94501
      }
    },
    {
      id: 1,
      name: 'Kodi',
      address: {
        state: 'CA',
        zip: 94502
      }
    },
    {
      id: 5,
      name: 'Trever',
      address: {
        state: 'OR',
        zip: 97221
      }
    },
    {
      id: 3,
      name: 'Isaac',
      address: {
        state: 'OR',
        zip: 97222
      }
    }
  ]
  
  // 0: Create a new array from the data array that returns the object and adds a city key with an empty string value, to the address object.
  
  // 0b: Create a new array with the address flattened into the main object. Ie, move state and zip into parent object and remove address key. This is called flattening.
  
  // 1: Sort the order of the objects in the array by id in ASC order.
  
  // 1b: Sort the order of the objects by the name in DESC order:
  
  // 2: Filter the array objects by address state "OR", then sort by id in ASC order. Hint, use chaining.
  
  // 3: Sort the order of the objects in DESC order by address zip.
  
  // 4: Reduce this array to a single object with the keys being the id.
  
  // 5: Reduce this array to a single object which groups the items by state which is an array. example // { OR: [], CA: [] }