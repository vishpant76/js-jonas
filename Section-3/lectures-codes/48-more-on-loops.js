// const jonasArray = [
//   "Jonas",
//   "Schmedtman",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0, 1, ...4
// // 4, 3,...., 0
// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// loop inside loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Starting exercise ${exercise}----------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}
