/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

const bmi = mark.calcBMI();
console.log(bmi);

// mark.calcBMI();
// john.calcBMI();
// // console.log(`${mark.calcBMI()>john.calcBMI ? mark.fullName : john.fullName}'s BMI (${})`)
// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`
//   );
// }

// console.log(mark);
// console.log(john);
