const jonasArray = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

const interestedIn = prompt(
  "What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends"
);

console.log(jonasArray[interestedIn]);

console.log(jonasArray.interestedIn);

console.log(jonasArray);
