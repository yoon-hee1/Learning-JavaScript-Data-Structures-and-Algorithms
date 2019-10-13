# 자바스크립트 자료구조와 알고리즘

## ch4.큐

### 큐

- `FIFO(First In First Out)` : 선입선출
  - 새 원소는 마지막 뒤에 들어가고 앞에서 빠져나가는 구조
  - 줄서기(영화 매표소 등)

### 큐 사용하기

```javascript
function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };

  this.dequeue = function(element) {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items);
    // console.log(items.toString());
  };
}

var queue = new Queue();

console.log(queue.isEmpty()); // true

queue.enqueue("Hone");
queue.enqueue("Dean");
queue.enqueue("Lion");

queue.print();
// [ 'Hone', 'Dean', 'Lion' ]
// Hone,Dean,Lion

console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();
queue.print();
// [ 'Lion' ]
// Lion
```

### 우선순위 큐

```javascript
function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement); // 우선순위가 가장 늦은 경우 위에 반복문에서 처리가 안될 경우 그냥 마지막 순서로..
      }
    }
  };

  this.dequeue = function() {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items.toString());
    console.log(items);
  };
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Malone", 3);
priorityQueue.enqueue("Camila", 1);
priorityQueue.enqueue("Jean", 5);
priorityQueue.print();
```

### 뜨거운 감자

```javascript
function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  };

  this.dequeue = function(element) {
    return items.shift();
  };

  this.front = function() {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length == 0;
  };

  this.clear = function() {
    items = [];
  };

  this.size = function() {
    return items.length;
  };

  this.print = function() {
    console.log(items);
    // console.log(items.toString());
  };
}

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = "";
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      console.log(queue.print(), i);
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + "(을)을 뜨거운 감자 게임에서 퇴장시킵니다.");
  }

  return queue.dequeue(); // 승자
}

var names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
var winner = hotPotato(names, 7);
console.log("승자는" + winner + "입니다.");

2. 앞 InGrid
3. 앞 InGrid
4. 앞 Jon
```
