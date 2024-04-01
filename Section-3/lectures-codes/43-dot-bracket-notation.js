const jonasArray = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// getting an object property
console.log(jonasArray.lastName); // dot notation - must use real property name
console.log(jonasArray["lastName"]);

// In bracket notation, we can put any expression inside the brackets.
const nameKey = "Name";
console.log(jonasArray["first" + nameKey]); // bracket notation - can use either the real property name or an expression that will compute that property name.

jonasArray.location = "Portugal";
jonasArray["twitter"] = "@vishpant";
console.log(jonasArray);

console.log(
  `${jonasArray.firstName} has ${jonasArray.friends.length} friends, and his best friend is called ${jonasArray.friends[0]}`
);
