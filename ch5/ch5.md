# 자바스크립트 자료구조와 알고리즘

## ch5.연결리스트

- 배열은 원소 추가/삭제마다 전체 요소들이 움직여 비용이 크다
- 연결리스트는 원소 추가/삭제 시 요소들이 움직이지 않아 비용이 적다.
- 대신 배열은 인덱스로 바로 접근이 가능하지만 연결리스트는 처음부터 검색해서 찾아야한다.

### 연결 리스트 만들기

#### 리스트 끝에 원소 추가하기

```javascript
function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  this.append = function (element) {
    // 새로운 노드 추가
    var node = new Node(element),
      current;
    // head가 없으면 즉 아무것도 없는 상태
    if (head === null) {
      head = node;
    } else {
      current = head;
      // 처음부터 시작해서 마지막 까지 검색
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    length++;
  };
}
```

#### 원소 삭제

```javascript
 this.removeAt = function (position) {

    // position이 유효한 위치인지 확인
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      // 첫번째 원소 삭제
      if (position === 0) {
        head = current.next;
      } else {
        // 해당 position을 찾을때까지 검색
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // previoues - current - next 에서 previous - next로 변경
        previous.next = current.next;
      }

      length--;

      return current.element;
    } else {
      // 조건 충족하지 않으면 null 반환
      return null;
    }
  }
```

#### 임의의 위치에 원소 삽입하기

```javascript
this.insert = function (position, element) {
    // 유효범위체크
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      // 첫 번째로 추가
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        // 해당 position에 추가
        while (index++ < position) {
          previous = current;
          current = current.next
        }

        // 가운데(previous, current 사이) node, node.next가 삽입
        node.next = current
        previous.next = node;
      }
      length++;

      return true;
    } else {
      return false;
    }
  }
```

#### 현재 원소 보여주기

```javascript
 this.toString = function () {
    var current = head,
      string = '';

    // 마지막 null이 될때까지
    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  }
```

#### 원소 제거하기

```javascript
  this.remove = function (element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  }
```

#### 기타 메소드들

```javascript
  this.isEmpty = function () {
    return length === 0;
  }

  this.size = function () {
    return length;
  }

  this.getHead = function () {
    return head
  }
```

### 이중 연결 리스트

- 기본 연결리스트에서 `prev`가 추가 즉, 앞뒤 연결 정보를 다 가지고 있다.
- 기본에는 앞에서 뒤로만 순회가능했는데 이제 뒤에서 앞, 양옆 아무쪽으로 다 순회가능하다.
  
#### 임의의 위치에 원소 삽입

```javascript
 this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;


      if (position === 0) {
        // 맨처음에 삽입하는데 리스트의 아무것도 없을때
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        // 맨 마지막에 삽입할때
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        // 이제 중간 어디든
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // previous - node - current 순서로 맞추기
        node.next = current; // node.next 는 current
        previous.next = node
        current.prev = node;
        node.prev = previous
      }
      length++;
      return true;
    } else {
      return false;
    }
  }
```

#### 이중 연결리스트 원소 삭제

```javascript
 this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      // 첫번째 원소 삭제
      if (position === 0) {
        head = current.next;
        // 원소가 1개라면 head, tail 모두 null
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        // 마지막 원소일때
        current = tail; // 마지막
        tail = current.prev; // 마지막을 마지막 prev대입
        tail.next = null; // tail next는 null
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      null;
    }
  }
```

#### 환형 연결 리스트

- 이중 환형 연결 리스트는 `tail.next`가 `head`를, `head.prev`가 `tail`을 상호 참조하는 구조