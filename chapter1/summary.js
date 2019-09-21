// 자바스크립트의 기초

// 변수
// 변수는 데이트를 담아두는 곳으로, 필요할 떄마다 데이터를 초기화, 수정 조회할 수 있다.
// 변수에 할당된 값은 특정 타입중 하나다.
// 자바스크립트에서 사용 가능한 타입은 숫자, 문자열, 불린, 함수, 객체가 있다.
// 이 밖에도 undefined, null, 배열, 날짜, 정규표현식이 있다.

var num = 1; // 변수를 선언한다. 키워드 var는 새로운 변수를 선언할 때마다 앞에 써주는게 좋다.
num = 3 // 이미 선언한 값을 변경한다.
var price = 1.5 //숫자현 변수를 선언한다.
var name = "Acorn" // 문자열 변수를 선언한다.
var nullVar = null; // null 변수를 선언한다.
var und; //undefined 변수를 선언한다.


//변수 스코프
//스코프란 어떤 변수에 접근 할 수 있는 범위다.
//지역변수와 전역 변수가 있다.

var myVariable = '전역';
myOtherVariable = '전역';

function myFunction() {
    var myVariable = '지역'
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = '지역'
    return myOtherVariable;
}

console.log(myVariable) //전역 변수이므로 전역이 출력
console.log(myFunction()) //지역이 출력됨.

console.log(myOtherVariable) // myOtherVariable이라는 이름의 전역변수를 참조하고 있다.
console.log(myOtherFunction()) // 지역이 출력됨.
console.log(myOtherVariable) // 지역이 출력됨.


//연산자
//프로그램에서 연산을 하려면 연산자가 필요하다. 여타 언어와 마찬가지로 자바스크립트에서 산술, 할당, 비교, 논리, 비트, 단항 연산자가 있다.

//1. 산술 연산자
// + 덧셈 - 뺄셈 * 곱셈 / 나눗셈 % 나머지 ++ 증가 -- 감소

//2. 할당 연산자
// = 할당 += 덧셈할당 -= 뺄셈할당 *= 곱셈할당 /= 나눗셈할당 %= 나머지할당

//3. 비교 연산자
// == 같은 === 같은(값, 객체타입 모두) != 같지않은 > 더 큰 >= 겉거나 더 큰 < 더 작은 <= 같거나 더 작은

// 4. 논리 연산자
//&& AND || OR ! NOT

//5. 비트연산자
// & AND | OR ~ NOT ^ XOR << 왼쪽으로 시프트 >> 오른쪽으로 시프트

//typeof 연산자는 변수나 표현식의 타입을 반환한다.
console.log('type of num : ', typeof num)

//Truthy 와 Falsy
// 자바스크립트에서 참이나 거짓이나의 구분은 약간 까다롭다. "Acorn" 같은 문자열이 true 값을 가질수도 있다.

undefined // false
null // false
Boolean // 참은 true, 거짓은  false
Number // +0, -0, NaN는 false, 그 이외에는 true
String // 빈 문자열이면 false, 이외의 경우 true
Object // true

//동등 연산자
//==는 피연산자가 다른 타입일지라도 결과가 참일 수 있다.

// 제어구조

//조건문
//조건식이 true일때만 실행할 스크립트일 경우
var num = 1;
if (num === 1) {
    console.log("num은 1과 같다")
}

//조건식이 false일 경우 실행할 스크립트를 지정할 경우는 if-else문을 사용
var num = 0;
if(num === 1) {
    console.log("num은 1과 같다")
}else {
    console.log("num은 1과 같지 않다.")
}

//if-else문은 삼항 연산자로 표현할 수 있다.

(num === 1) ? console.log("num은 1과 같다") : console.log("num은 1과 같지 않다.");

//switch문
//switch문은 case와 break를 잘 쓰는 게 중요하다. case절은 지정된 값이 switch의 값과 같은지 비교하는 역할을 하고, break 문은 그 다음의 코드가 실행
//되지 않도록 switch 문을 중단시킨다. default문의 스크립트는 어떤 것도 아닐때 기본 실행된다.
var month = 5;
switch (month) {
    case 1:
        console.log("1월");
        break;
    case 2:
        console.log("2월");
        break;
    case 3:
        console.log("3월");
        break;
    default:
        console.log("month는 1,2,3월 중 어느 것도 아니다.")

}


//루프문

//for문 지정한 수 이하까지 돔
for(var i = 0; i < 10; i++ ) {
    console.log(i)
}


//while문
//참일때 스크립트 실행됨.
var i = 0;
while (i<10) {
    console.log(i)
    i++;
}

//do-while
//일단 한번은 실행되고 나서 조건식이 평가된다.

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)

//함수

//기본 함수 문법
function sayHello() {
    console.log("안녕하세요")
}

//함수 호출방법
sayHello();

//함수는 인자를 받을 수 있다. 인자는 함수가 어떤 일을 하기 위해 필요한 변수다.
function output(text) {
    console.log(text)
}

output("hello");

//인자를 여러개 넘길 수 있다, 인자가 정의되어 있지 않으면 무시되고 정의된 인자만 사용한다.

//함수는 값을 반환할수 있다.
function sum(num1, num2) {
    return num1 + num2
}

var result = sum(1,2);
console.log(result);

//자바스크립트의 객체는 간단한 키-값의 집합이다.
//객체생성하는 방법
var obj = new Object();

var obj = {};

//객체는 생성과 동시에 값을 초기화 할 수 있다.
obj = {
    name: {
        first: "간달프",
        last : "회색의"
    },
    address : "중간계"
}


//객체지행 프로그래밍
//Book 클래스 생성
function Book (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
//클래스의 인스턴스 생성
var book = new Book('제목', 123,987654342);
// book객체의 프로퍼티를 조회하거나 고치는 방법
console.log(book.title);
book.title = '자바스크립트 자료 알고리즘';
console.log(book.title)
//클래스는 함수를 가질 수 있다.
Book.prototype.printTitle = function() {
    console.log(this.title)
}
//클래스 내부에 직접 함수를 선언할 수도 있다.
function Book (title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printInsh = function () {
        console.log(this.isbn)
    }
}
book.printInsh();


