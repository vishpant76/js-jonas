const friends = ["Michael", "Steven", "Rob"];
friends.push("Jay"); // add an element to the end of an array
const newLength = friends.push("Vishal");
console.log(friends);
console.log(newLength);

friends.unshift("John"); // add an element to the beginning of an array
console.log(friends);

const popped = friends.pop(); // pop an element from the end
console.log(friends);
console.log(popped);

friends.shift(); // remove an element from the beginning
console.log(friends);

// to get the index of an element. If the element does not exist, -1 will be returned.
console.log(friends.indexOf("Rob"));

console.log(friends.includes("Jay")); // returns a boolean value depending on whether the element exists in the array or not (returns True or False).
