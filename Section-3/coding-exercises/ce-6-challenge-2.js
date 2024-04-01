/* Write your code below. Good luck! 🙂 */

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
// calcTip(100);

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
