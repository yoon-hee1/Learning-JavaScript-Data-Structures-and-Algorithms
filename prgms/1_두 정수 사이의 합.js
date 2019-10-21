function solution(a, b) {
    if (a !== b) {
        let smaller = Math.min(a, b);
        const bigger = Math.max(a, b);
        for (let i = smaller + 1; i <= bigger; i++) {
            smaller += i;
        }
        return smaller;
    }
    return a;
}


/**
 * 다른 사람 코드
 * @param a
 * @param b
 * @returns {number}
 */
function solution(a, b) {
    return (a + b) * ((Math.abs(a - b) + 1) / 2);
}

// 가우스 법칙을 이용
