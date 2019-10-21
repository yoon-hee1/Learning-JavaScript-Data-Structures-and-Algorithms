function solution(s) {
    let answer = true;
    let pCnt = 0;
    let yCnt = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).toLowerCase() === 'p') {
            pCnt++;
        } else if (s.charAt(i).toLowerCase() === 'y') {
            yCnt++;
        }
    }
    if (pCnt !== yCnt) {
        answer = false;
    }
    return answer;
}


/**
 * 다른 사람 코드 1
 * @param s
 * @returns {boolean}
 */
function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length;
}

// .match(정규식): 정규식과 일치하는 문자열 갯수만큼 배열로 리턴


/**
 * 다른 사람 코드 2
 * @param s
 * @returns {boolean}
 */
function solution(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

// '같은 문자열을 같은 문자로 split하면 결과가 같을거다'로 접근
