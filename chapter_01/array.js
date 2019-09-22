let daysOfWeek1 = new Array();
console.log(daysOfWeek1);// []
let daysOfWeek2 = new Array(7);
console.log(daysOfWeek2);//[<7 empty items>]
let daysOfWeek3 = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
console.log(daysOfWeek3);//['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
console.log(daysOfWeek3.length);//7

for (let i = 0; i < daysOfWeek3.length; i++) {
    console.log(daysOfWeek3[i]);
}


let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 2;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

console.log(numbers);


numbers.push(11);
numbers.push(12, 13);

for (var i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
}
numbers[0] = -1;

console.log(numbers);

numbers.unshift(-2);

console.log(numbers);

numbers.unshift(-4, -3);

console.log(numbers);

//numbers.pop();

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}


console.log(numbers);

numbers.pop();

console.log(numbers);

numbers.splice(5, 3);

console.log(numbers);

numbers.splice(5, 0, 2, 3, 4);

console.log(numbers);

//2차원 배열

var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 75, 79, 79, 81, 81];

console.log(averageTemp);//2차원배열

console.log(averageTemp[0][4])//81

function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            //myMatrix[i].length 현재 돌고있는 배열의 길이
            console.log(myMatrix[i][j]);
        }
    }
}

var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];

var number = negativeNumbers.concat(zero, positiveNumbers);

console.log(number);

var isEven = function (x) {
    console.log(x);
    return (x % 2 == 0) ? true : false;
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(num.every(isEven));
console.log(num.some(isEven));