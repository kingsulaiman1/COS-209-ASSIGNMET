const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log("Doubled: " + doubled);

// filter
const evens = numbers.filter(function(n) {
  return n % 2 === 0;
});
console.log("Even Numbers: " + evens);

// reduce
const sum = numbers.reduce(function(acc, cur) {
  return acc + cur;
}, 0);
console.log("Sum: " + sum);
