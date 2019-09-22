# 자바스크립트 자료구조와 알고리즘

## ch2.배열

### 배열 초기화

```javascript
var arr = new Array();
var arr = []; // 이걸 더 추천
```

### 원소 추가/삭제

- **push** : 마지막 index에 추가
  
``` javascript
var arr = ["banana","orange"];
arr.push("apple"); // [ 'banana', 'orange', 'apple' ]
```

- **unshift** : 처음 index에 추가

``` javascript 
arr.unshift("grape"); // [ 'grape', 'banana', 'orange', 'apple' ]
```

- **pop** : 마지막 index요소 삭제

```javascript
arr.length; // 4
arr.pop(); // apple
arr.length; // 3
```

- **shift** : 처음 index요소 삭제

```javascript
arr.length; // 3
arr.shift(); // grape
arr.length; // 2
```

- **splice** : 중간 특정 index 요소 추가/삭제

```javascript
var spliceArr = ["apple","banana","orange","grape"];
spliceArr.splice(2, 1); // [ 'orange' ]
console.log(spliceArr); // [ 'apple', 'banana', 'grape' ]
spliceArr.splice(1, 0, 'watermelon');
console.log(spliceArr); // [ 'apple', 'watermelon', 'banana', 'grape' ]
```

- 첫번째 인자 : 원소 추가/삭제를 시작하는 index
- 두번째 인자 : 삭제하려고 하는 원소의 개수
- 세번째 인자 : 추가하려는 원소들


### 자바스크립트 배열 메소드 정리

- **concat** : 배열 합치기(기존 배열은 그대로 유지(불변성 유지))

``` javascript
var fruitArr = ["apple", "banana"];
var newArr = ["grape"]

console.log(fruitArr); // [ 'apple', 'banana' ]
var resultArr = fruitArr.concat(newArr);
console.log(fruitArr); // [ 'apple', 'banana' ] 불변성 유지
console.log(resultArr); // [ 'apple', 'banana', 'grape' ]
```

- **every** : 메소드 함수의 결과값이 `false`가 되면 바로 종료
- **some** : 메소드 함수의 결과값이 `true`가 되면 바로 종료

``` javascript
var numbers = [1, 2, 3, 4, 5];
numbers.every(function (v, i) {
  console.log(i);
  return v !== 4 // 요소의 값이 4와 같지 않을때는 true, 같을때는 false
})
// 0
// 1
// 2
// 3
```

- **forEach** : 반복문

``` javascript
numbers.forEach(function (v, i) {
  console.log(v * 2)
})
// 2
// 4
// 6
// 8
// 10
```

- **map** : 새로운 연산을 적용한 배열을 반환

```javascript
var mapNumbers = numbers.map(function (v, i) {
  return v * 3
})
console.log(mapNumbers); // [ 3, 6, 9, 12, 15 ]
```

- **filter** : 조건에 맞는 배열만 반환
  
```javascript
var filtedNumbers = numbers.filter(function (v, i) {
  return v % 2 === 0;
})
console.log(filtedNumbers) // [ 2, 4 ]
```

- **reduce** : 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다. <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>

```javascript
var reducedNumbers = numbers.reduce(function (c, v, i) {
  c.push(v * 3);
  return c;
}, [])
console.log(reducedNumbers); // [ 3, 6, 9, 12, 15 ]
```

- **revesre** : 배열 순서를 거꾸로 해서 반환

```javascript
var reversedNumbers = numbers.reverse();
console.log(reversedNumbers); //[ 5, 4, 3, 2, 1 ]
``` 

- **sort** : 배열 정렬

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var sortedNumbers = numbers.sort();
console.log(sortedNumbers);
[
   1, 10, 11, 12, 13, 14,
  15,  2,  3,  4,  5,  6,
   7,  8,  9
] // 문자열로 인식하여 순서가 올바르지 않다. 따라서 비교 정렬함수를 만들어야 한다.

// var sortedNumbers = numbers.sort(function (a, b) {
//   return a-b;
// })

- b가 a보다 크면 음수, a가 b보다 크면 양수, a와 b가 같으면 0
- 즉 음수면 a가 b보다 작고, 양수면 a가 b보다 크다.

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

[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]
```