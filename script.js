let number = 1;
console.log("Завдання 1");
while (number < 10) {
    console.log(number);
    number++;
}
console.log("------------------------------------------------------------");

console.log("Завдання 2");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log("------------------------------------------------------------");

console.log("Завдання 3");
const numx = 7;
for(let i = 1; i <= 10; i +=1) {
    console.log(`${numx} * ${i} = ${numx * i}`);
}
console.log("------------------------------------------------------------");

console.log("Завдання 4");
const listNum = [1, 2, 3, 4, 5];
let num = 0;
while (num < listNum.length) {
    console.log(listNum[num]);
    num++;
}
console.log("------------------------------------------------------------");

console.log("Завдання 5");
const numbers = [1, 2, 3, 4, 5, "b", 7, 8, "c", 10];
for (let index = 0; index < numbers.length; index++) {
  if (index === 7) {
    break;
  }
}
console.log("------------------------------------------------------------");

console.log("Завдання 6");
const n = 15;
for (let index = 0; index < 30; index++) {
  if (index >= n) {
    break;
  }
}
console.log("------------------------------------------------------------");

console.log("Завдання 7");
for (let index = 1; index <= 20; index++) {
    if (index % 3 === 0) {
      continue;
    }
  }
console.log("------------------------------------------------------------");

