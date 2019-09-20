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
