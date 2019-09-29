# 자바스크립트 자료구조와 알고리즘

## ch3.스택

### 스택

- `LIFO(Last In First Out)` : 후입선출
  - 항상 종단점(동일한 시점)에서 추가/삭제 된다.
  - 스택에서 종단점은 `TOP(꼭대기)`, `BASE(바닥)` 둘뿐이다.
  - 책더미, 식판 등

### 스택 사용하기

```javascript
function Stack() {
  var items = [];

  this.push = function(element) {
    items.push(element);
  };

  this.pop = function() {
    return items.pop();
  };

  this.peek = function() {
    return items[items.length - 1];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.size = function() {
    return items.length;
  };

  this.clear = function() {
    items = [];
  };

  this.print = function() {
    console.log(items.toString());
  };
}

var stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5);
stack.push(58);
stack.print(); // 5, 58
console.log(stack.peek()); // 58

stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.print(); // 5, 58, 11

stack.pop(); // 11이 빠짐
stack.pop(); // 58이 빠짐
console.log(stack.size()); // 1
stack.print(); // 5
```

### 10진수에서 2진수로 변환

<!--  -->

```javascript
function DivideBy2(decNumber) {
  var remStack = new Stack();
  var rem;
  var binaryString = "";

  function loop(decNumber) {
    if (decNumber <= 0) {
      return;
    }
    rem = decNumber % 2;
    remStack.push(rem);
    var newDecNumber = Math.floor(decNumber / 2);
    loop(newDecNumber);
  }
  loop(decNumber);
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(DivideBy2(10));
```

### 10진수에서 다른진수로 변환

```javascript
function baseConverter(decNumber, base) {
  var remStack = new Stack();
  var rem;
  var baseString = "";
  var digits = "0123456789ABCDEF";

  function loop(decNumber) {
    if (decNumber <= 0) {
      return;
    }
    rem = decNumber % base;
    remStack.push(rem);
    var newDecNumber = Math.floor(decNumber / base);
    loop(newDecNumber);
  }

  loop(decNumber);

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(1000345, 16));
```
