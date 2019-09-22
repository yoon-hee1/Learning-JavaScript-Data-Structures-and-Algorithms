// var arr = ["banana", "orange"];
// arr.push("apple"); //
// console.log(arr);
// arr.unshift("grape");
// console.log(arr);
// console.log(arr.length);
// console.log(arr.pop());
// console.log(arr.length);
// console.log(arr.shift());
// console.log(arr.length);

// var spliceArr = ["apple", "banana", "orange", "grape"];
// console.log(spliceArr);
// console.log(spliceArr.splice(2, 1));
// console.log(spliceArr);
// spliceArr.splice(1, 0, 'watermelon');
// console.log(spliceArr);


// var fruitArr = ["apple", "banana"];
// var newArr = ["grape"]

// console.log(fruitArr);
// var resultArr = fruitArr.concat(newArr);
// console.log(fruitArr);
// console.log(resultArr);

var numbers = [1, 2, 3, 4, 5];
// numbers.every(function (v, i) {
//   console.log(i);
//   return v !== 4
// })

// numbers.forEach(function (v, i) {
//   console.log(v * 2)
// })

// var mapNumbers = numbers.map(function (v, i) {
//   return v * 3
// })

// console.log(mapNumbers);

// var filtedNumbers = numbers.filter(function (v, i) {
//   return v % 2 === 0;
// })
// console.log(filtedNumbers)

// var reducedNumbers = numbers.reduce(function (c, v, i) {
//   c.push(v * 3);
//   return c;
// }, [])
// console.log(reducedNumbers);

// var reversedNumbers = numbers.reverse();
// console.log(reversedNumbers);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var sortedNumbers = numbers.sort();
console.log(sortedNumbers);
var sortedNumbers = numbers.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(sortedNumbers);