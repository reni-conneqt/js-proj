let str = "abcgfdhjbbd";
let uniqueValue = str
  .split("")
  .filter((val, index, arr) => arr.indexOf(val) === index)
  .join("");
console.log(uniqueValue);
