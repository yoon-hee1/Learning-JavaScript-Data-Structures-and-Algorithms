##배열

배열은 가장 간단한 메모리 데이터 구조다. 거의 모든 프로그래밍 언어에서 배열은 기본적으로 내장된 데이터 타입이다. 배열은 동일한 데이터 타입의 값들을 연속적으로 저장한 것이다. 

#### - 배열의 생성과 초기화
자바스크립트 배열은 아주 쉽게 선언, 생성, 초기화 할 수 있다.
```javascript
var daysOfWeek = new Array() // 1
var daysOfWeek = new Array(7) // 2
var daysOfWeek = new Array("일요일", "월요일", "화요일", "수요일", "목요일","금요일", "토요일") // 3
```

1. 간단히 new 키워드로 배열 인스턴스 생성
2. new 키워드에 인자를 주면 배열의 크기를 지정
3. 처음부터 초기화 할 원소를 생성자에게 전달하는 방법

#### - 배열 원소의 개수
```javascript
daysOfWeek.length
```

#### - 원소 추가와 삭제
```javascript
var numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length] = 10 // 새 원소를 추가
numbers.push(11);
numbers.push(12,13); // 배열의 마지막에 원소를 추가하기

numbers.unshift(-2)
numbers.unshift(-4, -3) //배열의 맨 앞부분에 원소를 추가하기

numbers.pop(); //배열 뒷부분의 값을 삭제할때 쓴다.

//특정 원소를 삭제할때
numbers.splice(5,3) //인덱스 5에서 시작되는 3개의 원소를 날린다.
//첫번째 인자는 원소를 추가/삭제하려는 위치, 두번째 인자는 삭제할 원소의 개수, 세번째 이후는 추가할 원소들
numbers.splice(5,0,2,3,4)
```

#### - 2차원과 다차원 배열
```javascript
var averageTempDay = [];
averageTempDay[0] = [72,75,79,81,81]
averageTempDay[1] = [81,79,75,73,72]
```

#### - 자바스크립트 배열 메소드 정리
- concat : 다수의 배열을 합치고, 병합된 배열의 사본을 반환한다.
- every : false가 반환되기 전까지 배열의 각 원소별로 함수를 호출
- filter : 지정된 함수의 결과 값을 true로 만드는 원소들로만 구성된 별도의 배열을 반환
- forEach: 배열의 각 원소별로 지정된 함수를 실행
- join: 배열 원소 전부를 하나의 문자열로 합침
- indexOf: 특정 원소의 인텍스를 찾아 반환
- lastIndexOf: 검색 조건에 부합하는 가장 마지막에 위치한 원소를 찾아 그 인덱스를 반환.
- map: 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환
- reverse: 배열의 원소 순서를 거꾸로 바꾼다.
- slice: 지정된 인덱스부터 원소를 잘라 새로운 배열을 반환
- some: 지정된 함수의 결과 값을 true로 만드는 원소 각각을 전달
- sort: 배열의 원소를 알파벳순으로, 또는 지정된 함수에 따른 순서로 정렬
- toString: 배열을 문자열로 바꾸어 반환
- valueOf: toString 메소드와 같음.


#### - 여러 배열 합치기
concat 메소드를 이용한다.
```javascript
var zero = 0;
var positiveNumbers = [1,2,3]
var negativeNumbers = [-3,-2,-1]
var numbers = negativeNumbers.concat(zero, positiveNumbers) 
```

#### - 반복자 함수
```javascript
var isEven = function(x) {
    console.log(x);
    return (x % 2 == 0) ? true:false;
    //return (x % 2 == 0); 으로 변경 가능
    
}
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//every 메소드는 함수의 결과 값이 false가 될 때까지 배열의 모든 원소를 반환.
numbers.every(isEven)

//some 메소드는 지정된 함수의 결과가 true일때 배열의 각 원소를 반복한다.
numbers.some(isEven)

//조건에 관계없이 배열의 모든 원소를 반복하려면 forEach함수를 쓴다.
numbers.forEach(function(x) {
    console.log(x % 2 == 0)
})

//수행 결과를 새 배열 객체로 반환하는 메소드가 있다. 
var myMap = numbers.map(isEven)

//함수의 결과 값을 true로 만드는 원소로만 구성된 새 배열을 반환
var evenNumbers = numbers.filter(isEven)

//이 메소드에는 previousValue, currentValue, index, array를 인자로 받는 함수를 지정하는데
//, 다음과 같이 모든 배열 원소 값의 총합을 구할 때 유용하다.
numbers.reduce(function(previous, current, index) {
    return previous + current;
});
```


#### - 검색과 정렬
```javascript
//원소들의 순서를 반대로 정렬
numbers.reverse();

//정렬 - sort 메소드 그래도 사용하면 모든 원소를 문자열로 취급해 사전적으로 정리함.
numbers.sort();
numbers.sort(function(a,b) {
  return a-b;
});

function compare(a,b) {
    if(a < b) {
        return -1;    
    }
    if(a > b) {
        return 1;
    }
    //a는 b가 같다.
    return 0;
}
numbers.sort(compare);

//사용자 정의 정렬
var friends = [
    {name: 'John', age: 34},
    {name: 'Camila', age: 21},
    {name: 'Jack', age: 30}
];

function comparePerson(a,b) {
    if(a.age < b.age) {
        return -1
    } o
    if(a.age > b.age) {
        return 1
    }    
    return 0;
}
console.log(friends.sort(comparePerson))
```
- 검색 : 
인자로 전달된 문자열과 매치되는 첫번째 원소의 인덱스는 indexOf,
마지막 원소의 인덱스는 lastIndexOf 두 메소드로 구할수 있음.

 #### - 배열을 문자열로 변환
 ```javascript
//배열의 모든 원소를 단일 문자열로 바꿀때 toString 메소드를 쓴다.
console.log(numbers.toString())

//각 원소 사이에 같은 구분자를 두고 싶다면 join메소드를 쓴다.
var numbersString = numbers.join("-")
console.log(numbersString)
 ```