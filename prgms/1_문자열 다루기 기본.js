function solution(s) {
    return s === parseInt(s).toString() && (s.length === 4 || s.length === 6);
}

// isNaN은 지수형태(ex. '1e23')의 문자열을 숫자로 인식하기 때문에 주의해야 한다.
