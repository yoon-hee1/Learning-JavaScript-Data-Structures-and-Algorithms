function solution(answers) {
    let answer = [];
    const c1 = [1, 2, 3, 4, 5];
    let r1 = 0;
    const c2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let r2 = 0;
    const c3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let r3 = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === c1[i % 5]) {
            r1++;
        }
        if (answers[i] === c2[i % 8]) {
            r2++;
        }
        if (answers[i] === c3[i % 10]) {
            r3++;
        }
    }

    const resultList = [r1, r2, r3];
    const max = findMax(resultList);

    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i] === max){
            answer.push(i + 1);
        }
    }

    return answer;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}


/**
 * 다른 사람 코드
 * @param answers
 * @returns {Array}
 */
function solution(answers) {
    let answer = [];
    const a1 = [1, 2, 3, 4, 5];
    const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const a1c = answers.filter((a, i)=> a === a1[i % a1.length]).length;
    const a2c = answers.filter((a, i)=> a === a2[i % a2.length]).length;
    const a3c = answers.filter((a, i)=> a === a3[i % a3.length]).length;
    const max = Math.max(a1c, a2c, a3c);

    if (a1c === max) { answer.push(1); }
    if (a2c === max) { answer.push(2); }
    if (a3c === max) { answer.push(3); }

    return answer;
}

// 1. answers에서 조건에 따라 '남겨야' 한다. --> filter
// 2. Math.max를 이용
