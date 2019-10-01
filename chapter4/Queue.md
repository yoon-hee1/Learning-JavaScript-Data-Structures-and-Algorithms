### 큐

- 큐는 FIFO 원리에 따라 정렬된 컬렉션이다. 새 원소는 뒤로 들어가서 앞에서 빠져나가는 구조이다. 따라서 마지막에 추가된 원소는 큐의 뒷부분에서 제일 오래 기다려야 한다.

#### 큐 만들기
```javascript
function Queue() {
    
    var items = [];
    
    this.enqueue = function(element) {
        items.push(element);
    };
    
    this.dequeue = function() {
       return items.shift();
    };

    this.front = function() {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.clear = function() {
        items = [];
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}
```

- enqueue(원소) : 큐의 뒤쪽에 원소를 추가한다.
- dequeue() : 큐의 첫번째 원소를 반환하고 큐에서 삭제한다.
- front() : 큐의 첫번째 원소를 반환하되 큐 자체는 그대로 놔둔다.
- isEmpty() : 큐가 비어 있으면 true, 그 외에는 false를 반환한다.
- size() : 큐의 원소 개수를 반환한다.

#### 우선 순위 큐

- 우선순위에 따라 추가되고 삭제됨.

1. 우선순위를 설정해 원소를 정확한 위치에 추가하는것.
2. 추가는 순서대로 하되 삭제만 우선순위에 따르는 것.
    ```javascript
    
    function PriorityQueue () {
       var items = [];
   
       function QueueElement (element, priority) {
           this.element = element;
           this.priority = priority;
       }   
   
       this.enqueue = function (element, priority) {
           
           var queueElement = new QueueElement(element, priority);
   
           if(this.isEmpty()) { 
               items.push(queueElement);
           } else {
               var added = false;
               for(var i = 0; i < items.length; i++) {
                   if(queueElement.priority < items[i].priority) {
                       items.splice(i, 0, queueElement);
                       added = true;
                       break;
                   }
               }       
           
               if(!added) {
                   items.push(queueElement)
               }
           }   
       }   
    // 그 밖의 메소드는 기본 큐의 구현체와 동일함.
   
    }
    ```

#### 환영큐 (뜨거운 감자 게임)
- 원을 그리고 서 있는 아이들이 뜨거운 감자를 옆 사람에게 최대한 빨리 전달하다가, 갑자기 모든 동작으로 멈추고 그때 뜨거운 감자를 손에 들고 있는 아이를 벌칙으로 퇴장시키는 게임. 최후의 1인이 남을때까지 계속함.

    ```javascript
          
    function hotPotato (nameList, num) {
      
      var queue = new Queue();
  
      for(var i = 0; i < nameList.length; i++) {
          queue.enqueue(nameList[i]);
      }   
      
      var eliminated = '';
      while (queue.size() > 0) {
  
          for(var i = 0; i < num; i++) {
              queue.enqueue(queue.dequeue());
          }
          eliminated = queue.dequeue();
          console.log(eliminated + '을 뜨가운 감자 게임에서 퇴장시킵니다.')
      }   
  
      return queue.dequeue();
  
    }
  
    ```