let str = ["Pune", "Ahmedabad", "Rajkot", "Mumbai", "Delhi", "Kanpur"];
let result = [];
let index = str.length - 1;

for (let groupSizer = 1; index >= 0; groupSizer++) {
  let group = [];
  console.log(index);
  for (let j = 0; j < groupSizer && index >= 0; j++) {
    console.log(`J value ${j}`);
    group.push(str[index]);
    index--;
  }
  result.push(group);
}

console.log(result);
