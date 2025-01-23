let arr = [1, 2, 4, 5, 6, 7, 9];
const even = arr.filter((num) => num % 2 === 0);
const odd = arr.filter((num) => num % 2 !== 0);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}`);
