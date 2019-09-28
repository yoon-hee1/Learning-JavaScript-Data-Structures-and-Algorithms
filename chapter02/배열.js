//1. 여러배열 합치기
    var zero = 0;
    var positiveNumbers = [1,2,3];
    var negativeNumbers = [-3,-2,-1];
    // console.log(negativeNumbers.concat(zero, positiveNumbers));//-3,-2,-1,0,1,2,3



//2. 반복자 함수
    var isEven = function(x){
        // console.log(x);
        return ( x%2 === 0 ) ;
    }

    var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    numbers.every(isEven);  //1
    numbers.some(isEven);  //1 2
    numbers.forEach(function(x){
    //    console.log(x%2===0);
    }); //false, true, false, true, false, true, false, true, false, true, false, true, false, true, false

    var myMap = numbers.map(isEven);
    // console.log(myMap);
    var evenNumbers = numbers.filter(isEven);
    // console.log(evenNumbers); //2,4,6,8,10,12,14

    numbers.reduce(function(previous,current,index){
        console.log('prev=>'+previous);
        console.log('curr=>'+current);
        console.log('index=>'+index);
    });