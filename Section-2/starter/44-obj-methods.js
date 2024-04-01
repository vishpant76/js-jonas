// const jonasArray = {
//   firstName: "Jonas",
//   lastName: "Schmedtman",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // Any function that is attached to an object is called a method. Below, we need function expression to create this method... This is one of the significance of using function expression. This simply wouldn't be possible to do using function declaration.

//   //   calcAge: function (birthYear) {
//   //     return 2037 - birthYear;
//   //   },

//   calcAge: function () {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonasArray.calcAge(1991));
// console.log(jonasArray["calcAge"](1991));

// In every method, JS gives us access to a special method called 'this'. In the above calcAge function, we can read the birthYear directly from the object itself without having to pass it in as a parameter in line 9 (into the function).

// The this keyword/variable is basically equal to the object on which the method is called. In other words, it is equal to the object calling the method.

const jonasArray = {
  firstName: "Jonas",
  lastName: "Schmedtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //   calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonasArray.calcAge());

// console.log(jonasArray.age);
// console.log(jonasArray.age);
// console.log(jonasArray.age);

// console.log(jonasArray);

console.log(jonasArray.getSummary());
