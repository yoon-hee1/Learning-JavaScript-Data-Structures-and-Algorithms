##Stack

- 스택은 LIFO(후입선출) 원리에 따라 정렬된 컬렉션.
- 스택의 자료는 항상 동일한 종단점에서 추가/삭제됨.
- 스택에서 종단점은 꼭대기와 바닥 둘뿐인데, 가장 최근 자료는 꼭대기 근처에, 가장 오래된 자료는 바닥 근처에 위치한다.

#### 스택만들기
```javascript
function stack() {
    //프로퍼티와 메소드는 여기에 기술
}

var items = [];
```
- push(): 스택 꼭대기에 새 원소를 추가.
- pop(): 스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 삭제한다.
- peak(): 스택 꼭대기에 있는 원소를 반환하되 스택은 변경하지 않는다.
- isEmpty(): 스택에 원소가 하나도 없으면 true, 스택의 크기가 0보다 크면 false를 반환.
- clear(): 스택의 모든 원소를 삭제한다.
- size(): 스택의 원소 개수를 반환한다. 

```javascript
//push는 스택에 새로운 원소를 추가하는 메소드인데 , 스택의 꼭대기에만 원소를 넣을 수 있다.
this.push = function(element) {
    item.push(element)
}

//pop은 스택에서 원소를 삭제하는 메소드
//스택은 LIFO 원리로 원소를 담기 때문에 가장 마지막에 추가한 원소가 가장 먼저 삭제됨.
this.pop = function() {
    return items.pop
}

//peak은 일종의 헬퍼 메소드
//스택에 가장 마지막으로 추가된 원소를 확인하는 용도
this.peak = function() {
    return items[items.length-1]
}

//isEmpty 메소드는 스택이 비어 있으면 true, 아니면 false를 반환

this.isEmpty = function () {
    return item.length == 0
}

this.size = function() {
    return items.length
}

//clear 메소드는 스택의 모든 원소를 깔끔하게 청소.
this.clear = function() {
    items = []
}

this.print = function() {
    console.log(items.toString())
}
```

#### Stack 클래스 사용

```javascript
var stack = new Stack();
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peak()) // 결과는 8

stack.push(11)
console.log(stack.size()) // 3
console.log(stack.isEmpty()) // false
```
#### 10진수에세 2진수로 변환

```javascript
function divideBy2 (decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }   

    return binaryString;
}
```