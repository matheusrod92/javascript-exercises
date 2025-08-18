// 1.
const cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omblet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};

// 1. Add height and weight to Fluffy
cat.height = "30cm";
cat.weight = "10kg";

// 2. Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";

// 3. List all the activities of Fluffyy’s catFriends.
cat.catFriends.forEach((friend) => {
  console.log(friend.activities);
});

// 4. Print the catFriends names.
cat.catFriends.forEach((friends) => {
  console.log(friends.name);
});

// 5. Print the total weight of catFriends
let totalWeight = 0;
cat.catFriends.forEach((friend) => {
  totalWeight = friend.weight + totalWeight;
});
// console.log(totalWeight);

// 6. Print the total activities of all cats (op:6)
cat.catFriends.forEach((friend) => {
  friend.activities.forEach((activity) => {
    console.log(activity);
  });
});

// 7. Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("chase laser", "climb trees");
cat.catFriends[1].activities.push("play with Guilherme", "break things");

console.log(cat.catFriends);

// 8. Update the fur color of bar
cat.catFriends[0].furcolor = "blue";

console.log(cat.catFriends[0].furcolor);
