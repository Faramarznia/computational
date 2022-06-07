const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(number);

let sum = 0;
for (let t = 0; t < number.length; t = t + 1) {
  console.log((sum = sum + number[t]));
}
console.log("خب بریم سراغ پروژه دوم (:");

let even = [];
let odd = [];

for (let t = 0; t < number.length; t = t + 1) {
  if (number[t] % 2 === 0) {
    even.push(number[t]);
  } else {
    odd.push(number[t]);
  }
}
console.log(even);

console.log(odd);
