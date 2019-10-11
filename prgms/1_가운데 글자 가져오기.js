function solution(s) {
    let ansewr = '';
    const result = s.length % 2 !== 0 ? s.charAt(Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
    return ansewr + result;
}

/**
 * 다른 사람 코드
 * @param s
 * @returns {string}
 */
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

// 1. slice(시작, 끝)    vs    substr(시작, 길이)
// 기준점을 고정시킨 뒤, 길이만 분기로 조정
