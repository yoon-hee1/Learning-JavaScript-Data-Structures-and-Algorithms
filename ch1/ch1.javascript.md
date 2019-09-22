# 자바스크립트 자료구조와 알고리즘

## ch1.자바스크립트 개요

### 변수

- 사용한 가능한 타입은 아래와 같다.
- 숫자(Number)
- 문자열(String)
- 불린(Boolean)
- 함수(Function)
- 객체(Object)
- `undefined, null, 배열(Array), 정규 표현식(regular expression)`이 있다.

- ES5에서는 `var`만 사용하지만 ES6부터는 `let, const`를 사용한다.

```Javscript
var num = 1;
num = 3;

var price = 1.5;
var name = 'Acorn';
var trueValue = true;
var nullVar = null;
var und;

-----

let num = 1;
num = 3; 가능

const num 1;
num = 3; //불가능
```

### 변수 스코프

- 지역변수와 전역변수가 있다.
- 전역변수는 전역 스코프 어디서든 사용가능, 지역변수는 해당 스코프(지역)내에서만 사용가능
- `var`사용시에는 함수스코프
- `let, const`는 블록스코프

```javacript
if(true) {
  var test = 10;
}

test; // 10;

if(true) {
  let test1 = 10;
}

test1; // error;
```

<https://poiemaweb.com/es6-block-scope>(let, const와 블록 레벨 스코프)

### 연산자

- <https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators>MDN 연산자 파트를 통해서 공부하자.

### Truthy와 Falsy

- `undefined` : `false`
- `null` : `false`
- `Boolean` : `true or false`
- `Number` : `+0, -0, NaN는 false`, 나머지는 true
- `String` : `빈문자열이면 false (길이가 0)`, 나머지 true
- `Object` : `true`

### 동등연산자

- `==`는 강제변환을 해서 비교한다.
  - ex) `String`,`Number`비교시 `String`을 `toNumber(String)`으로 변환 후 비교
  - `toNumber, toPrimitive`로 비교
- `===`는 강제변환을 하지 않는다.

### 제어구조

- 조건문 : `if, switch`
- 루프문 : `for, while`

### 함수

```javascript
// 선언
function sayHello() {
  console.log('hello';
}

// 호출
sayHello();
```

### 객체지향 프로그래밍

```javascript
function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new Book("제목", 103, 12939123);
console.log(book.title); // '제목'

Book.prototype.printTitle = function() {
  console.log(this.title);
};

book.printTitle();

// ES6

class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printTitle() {
    console.log(this.title);
  }
}

const book = new Book("제목", 103, 12939123);
book.printTitle();
```

- <https://poiemaweb.com/es6-class> ES6 Class
\