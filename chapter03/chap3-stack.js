console.log('Hello, world!')

var items = [];
var head = 0;

push(1);
push(2);
push(3);
print();

var size2=size();
console.log(size());

function push(element) {
    items[head] = element;
    head++;
}

function pop() {
    return items[head--];
}

function peek() {
    return items[head];
}

function isEmpty() {
    if(size() == 0) return true;
    else return false;
}

function clear() {
    items = [];
}

function size() {
    return items.length;
}

function print(){
    console.log(items.toString());
}