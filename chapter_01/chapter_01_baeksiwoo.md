---
title: Chapter_1_baeksiwoo
layout: post
date: '2019-09-19 20:20:00 +0900'
categories: Learning JavaScript Data Structures and Algorithms
---
자료구조와 알고리즘에 관한 모든 지식은 교보재인 [Learning JavaScript Data Structures and Algorithms]에 기반할 것이다.

먼저 **Javascript**를 통한 지식축적을 도모하고자 한다. 그러기 위해서는 Chrome 또는 Firefox 브라우저의 **웹 콘솔** 기능을 활용해야 할 것이다. 대부분의 학습은 `$ console.log()` 코드를 통해 결과물을 확인하는 방식을 채택할 것이다.




***********
**제 1장**
***********

**Javascript**를 통한 학습을 진행하므로 그에 대한 선수지식이 필요하다. 교보재의 1장 내용에 그것들이 매우 심플하게 요약되어 있다. 변수, 연산자, Truthy와 Falsy, 동등 연산자(==, ===), 각종 제어구조, 그리고 함수 문법과 객체지향 프로그래밍의 개략적인 내용을 빠르게 들여다 볼 수 있다. 그 내용들을 아래와 같이 짚어보자면

* **변수**

숫자(Number), 문자열(String), 불린(Boolean), 함수(Function), 객체(Object), undefined, null, 배열(array), 날짜(date), 정규표현식(regular expression)

Number, String, Boolean, Function, Object 등은 다른 언어에서의 그것들과 거의 동일한 개념이라고 할 수 있다.
undefined란 선언은 했으나 아직 값이 할당되지 않은 것을 의미한다.
Function의 경우, global Function(또는 global variable)를 사용하는 것은 지양된다.

* **연산자**

산술연산자, 할당연산자, 비교연산자, 논리연산자, 비트연산자

산술연산자의 종류는 +(덧셈), -(뺄셈), *(곱셈), /(나눗셈), %(나머지), ++(증가), --(감소)가 있다.
할당연산자의 종류는 =(할당), (x+=y) == (x=x+y)(덧셈할당), -=(뺄셈할당), *=(곱셈할당), /=(나눗셈할당), %=(나머지할당)이 있다.
비교연산자의 종류는 ==(같은), ===(값, 객체타입이 모두 같은), !=(같지않은), >(더 큰), >=(같거나 더 큰), <, <=이 있다.
논리연산자의 종류는 &&(AND), ||(OR), !(NOT)가 있다.
비트연산자의 종류는 &(AND), |(OR), ~(NOT), ^(XOR), <<(왼쪽으로 시프트), >>(오른쪽으로 시프트)가 있다.

* **Truthy와 Falsy**

Boolean 값으로써 undefined, null, 불린(Boolean), 숫자(Number), 문자열(String), 객체(Object)에 대한 판별

undefined는 false이다.
null은 false이다.
Boolean은 당연히 참이면 true, 거짓이면 false이다.
Number는 일반적으로 true이지만, +0, -0, NaN(음수에 대한 제곱근과 같이, 연산불가인 경우)인 경우 false이다.
String은 일반적으로 true이지만, 길이가 0인 String(빈 문자열)인 경우 false이다.
Object는 true이다.

* **동등 연산자(==, ===)**
타입(x)와 타입(y)에 대한 결과는 다음과 같다.(console.log(x==y))
console.log(null == undefined)는 true이다.
console.log(undefined == null)은 true이다.
console.log(Number == String)은 일단 toNumber method를 통해 String을 판단하는데, 만약 String이 문자로만 구성되었다면 NaN으로 parsing되므로 Number와 NaN을 비견시키게 된다. 즉, 결과적으로 false가 된다.
console.log(String == Number)는 바로 위와 동일한 방식으로 비견한다.
console.log(Boolean == Any)는 일단 toNumber method를 통해 Boolean을 판단하는데, 만약 Boolean이 true이면 1로, false이면 +0으로 parsing하여 Any와 비견한다.
console.log(Any == Boolean)은 바로 위와 동일한 방식으로 비견한다.
console.log(String이나 Number == Object)는 일단 toPrimitve method를 통해 Object를 판단하는데, 만약 Object의 valueOf 결과가 기본 값이라면 기본 값 그대로 반환한 후에 String이나 Number와 비견한다.
console.log(Object == String이나 Number)는 바로 위와 동일한 방식으로 비견한다.

* **제어구조**
제어구조는 아래와 같이 사용된다.

// 일반적인 if ~ else 구문
var num = 1;
if (num === 1) {
    console.log("num은 1과 같다");
} else if (num === 2) {
    console.log("num은 2와 같다");
} else if (num === 3) {
    console.log("num은 3과 같다");
} else {
    console.log("num은 " num "이다");
}



// 일반적인 if ~ else 삼항 연산자(ternary operator) 구문
if (num === 1) {
    num--;
} else {
    num++
}



// if ~ else 삼항 연산자 구문의 다른 표현
(num === 1) ? num-- : num++;



// 일반적인 switch 구문
var month = 5;
switch (month) {
    case 1:
        console.log("1월");
        break;
    case 2:
        console.log("2월");
        break;
    case 3:
        console.log("3월");
        break;
    default:
        console.log("month는 1월, 2월, 3월 중 어느 것도 아니다");
}



// 일반적인 for loop 구문
for (var i = 0; i < 10; i++) {
    console.log(i);
}



// 일반적인 while loop 구문
var i = 0;
while (i < 10)
{
    console.log(i);
    i++;
}


* **함수**

// 일반적인 함수 문법(1)
function sayHello() {
    console.log('안녕하세요');
}



// 일반적인 함수 문법(2)
function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);
output (result);


* **객체지향 프로그래밍**

// 객체지향 프로그래밍의 일반적인 형태(1)
var obj = new Object();
//또는 var obj = {};

obj = {
    name: {
        first: '간달프',
        last: '회색의'
    },
    address: '중간계'
};



// 객체지향 프로그래밍의 일반적인 형태(2)
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('제목', 123, 91272347359);

console.log(book.title); // 도서 제목 출력
book.title = '자바스크립트 자료 구조와 알고리즘'; // 도서 제목 업데이트



***********
**제 2장**
***********

**배열(array)** 에 대한 내용을 간략하게 요약한다. 배열의 생성과 초기화는 생략하기로 한다.

* **피보나치 수열**
아래와 같이 피보나치 수열을, 배열을 이용하여 간단히 표현해본다.
var fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for (var i = 3; i < 20; i++) {
    finonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (var i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}


* **배열의 맨 끝에 원소 추가하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

// 첫번째 방법
numbers[numbers.length] = 10; 

// 두번째 방법(by array method)
numbers.`push`(10,11); // 


* **배열의 맨 앞에 원소 추가하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

// 첫번째 방법(값 덮어쓰기)
for (i = numbers.lenth; i >= 0; i--) { 
    numbers[i] = numbers[i-1];
}

numbers[0] = -1;

// 두번째 방법(by array method)
numbers.`unshift`(-2,-1);


* **배열의 가장 끝 원소 삭제하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers.`pop`(9);


* **배열의 가장 앞 원소 삭제하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

// 첫번째 방법(값 덮어쓰기): 이 경우 가장 끝 원소는 undefined(배열의 잉여)가 된다.
for (i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1];
}

// 두번째 방법(by array method)
numbers.`shift`(0);


* **배열의 n번째 원소 다음으로 m개의 원소 추가하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers.`splice`(5,3);
console.log(numbers);
    :::> 0,1,2,3,4,8,9
    

* **배열의 n번째 원소 다음에 원소 추가하기**
var numbers = [0,1,2,3,4,5,6,7,8,9];

numbers.`splice`(5,0,1,1,1);
console.log(numbers);
    :::> 0,1,2,3,4,1,1,1,5,6,7,8,9


* **2차원 이상의 다차원 배열의 표현**
// 이틀동안, 하루 4회씩 측정한 섭씨온도를 표현하는 2차원 배열을 생각해보면
var avgTemp = [];

avgTemp[0] = [];
avgTemp[0][0] = 27;
avgTemp[0][1] = 31;
avgTemp[0][2] = 30;
avgTemp[0][3] = 28;

avgTemp[1] = [];
avgTemp[1][0] = 25;
avgTemp[1][1] = 29;
avgTemp[1][2] = 29;
avgTemp[1][3] = 26;

console.log(avgTemp);

function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(avgTemp);


* **3X3 큐빅 배열의 표현**
var matrixCube = [];

for (var i = 0; i <3; i++) {
    matrixCube[i] = [];
    for (var j = 0; j < 3; j++) {
        matrixCube[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrixCube[i][j][z] = i + j + z;
        }
    }
}


* **여러 배열 합치기**
var zero = 0;
var posNumbers = [1,2,3];
var negNumbers = [-3,-2,-1];

var numbers = negNumbers.`concat`(zero, posNumbers);


* **조건의 결과값이 false일 때까지 배열 반복하기**
var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0 ) ? true : false;
};

var numbers = [1,2,3,4,5,6,7,8,9];

numbers.`every`(isEven);
// 1이 바로 2의 배수가 아니므로(false), 딱 한번만 실행되고 바로 종료됨


* **조건의 결과값이 true일 때까지 배열 반복하기**
var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
};

var numbers = [1,2,3,4,5,6,7,8,9];

numbers.`some`(isEven);
// 1, 2에서 2의 배수가 나오므로(true), 딱 두번 실행되고 종료됨


* **조건에 상관없이 배열을 무조건 끝까지 반복하기**
var isEven = functions (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
};

var numbers = [1,2,3,4,5,6,7,8,9];

numbers.`forEach`(isEven);


* **조건의 결과값을 모두 표현하기**
var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
};

var numbers = [1,2,3,4,5,6,7,8,9];

var myMap = numbers.`map`(isEven);
// 이 결과로 myMap은 [false, true, false, true, false, true, false, true, false]가 나오게 된다.


* **조건의 결과값이 true인 것만 표현하기**
var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true :  false;
};

var numbers = [1,2,3,4,5,6,7,8,9];

var evenNumebers = numbers.`filter`(isEven);
// 이 결과로 evenNumbers는 [2,4,6,8]만 나오게 된다.


* **모든 배열의 원소의 합 표현하기**
var numbers = [1,2,3,4,5,6,7,8,9];

numbers.`reduce`(function(previous, current, index) {
return previous + current;
)};
// 값은 45


* **배열의 원소 순서 정렬하기**
var numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.`reverse`();
// 결과는 [10,9,8,7,6,5,4,3,2,1]

numbers.`sort`();
// 결과는 [1,10,2,3,4,5,6,7,8,9] 왜냐하면 이 method는 원소를 문자열로 취급하기 때문!!
// 숫자형 오름차순으로 하기 위해선

numbers.`sort`(function(a,b) {
return a - b;
)};


* **인스턴스가 가미된 배열의 정렬**
var friends = [
    {name: 'John', age: 34},
    {name: 'Camila', age: 21},
    {name: 'Jack', age: 30}
];

function comparePerson(a, b) {
    if (a.age < b.age) {
    return -1
    }
    if (a.age > b.age) {
    return 1
    }
    return 0;
}

console.log(friends.`sort`(comparePerson));
// 결과는 Camila(21), Jack(30), John(34)


* **문자열 정렬**
// 문자열과 관련된 array method는 생략한다.


[Learning JavaScript Data Structures and Algorithms]: https://www.packtpub.com/web-development/learning-javascript-data-structures-and-algorithms-third-edition
