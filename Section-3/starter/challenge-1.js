// Given an array of forecasted max temperatures, the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."
// Create a func 'printForecast' which takes  in an array 'arr' and logs a string like the above to the console.

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     process.stdout.write(`... ${arr[i]}C in ${i + 1} days`);
//   }
// };

// printForecast([17, 21, 23]);

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log('...' + str);
};

printForecast([17, 21, 23]);
