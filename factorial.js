const factorial = (num) => {
  if (num === 1 || num === 0){
    return 1;
  } else return num * factorial(num - 1)
}
module.exports = factorial;

console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(8))
console.log(factorial(18))