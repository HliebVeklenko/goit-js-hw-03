function add(...args) {
  let sumOfArgs = 0;
  for(let arg of args) {
    sumOfArgs += arg;
  }
  return sumOfArgs;
}


console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));