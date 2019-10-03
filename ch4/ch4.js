function Queue() {
  var items = [];

  this.enqueue = function (element) {
    items.push(element);
  };

  this.dequeue = function (element) {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items);
    // console.log(items.toString());
  };
}

function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      console.log(queue.print(), i)
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '(을)을 뜨거운 감자 게임에서 퇴장시킵니다.');
  }

  return queue.dequeue(); // 승자
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log('승자는' + winner + '입니다.');

2. 앞 InGrid
3. 앞 InGrid
4. 앞 Jon