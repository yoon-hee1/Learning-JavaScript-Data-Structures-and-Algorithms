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
