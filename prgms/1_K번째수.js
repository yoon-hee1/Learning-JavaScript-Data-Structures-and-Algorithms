function solution(array, commands) {
    let answer = [];
    commands.forEach((item) => {
        const result = array.slice(item[0] - 1, item[1]).sort((a, b) => {return a - b})[item[2] - 1];
        answer.push(result);
    });
    return answer;
}

// 자바스크립트 sort는 항상 주의하자.
// 정렬 처리를 '문자열' 바꾼 후 처리한다.
// (특히나 모든 원소가 Number 타입일때 건너뛰기 쉽다.)
// [1, 2, 3, 4, 5, 100].sort(); // [1, 100, 2, 3, 4, 5]


/**
 * 다른 사람 코드
 * @param array
 * @param commands
 * @returns {Uint8Array | BigInt64Array | T[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}
 */
function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}

// 1. 내가 forEach를 사용한 같은 이유로 map 사용
// 2. 매개변수로 사용되는 함수에서는 (item) => {} 말고 ([i, j, k]) => {}로 조금 더 명시적으로 가능
