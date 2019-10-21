function solution(strings, n) {
    return strings.sort((prev, next) => {
        if (prev.charAt(n) !== next.charAt(n)) {
            return prev.charAt(n).localeCompare(next.charAt(n));
        } else {
            return prev.localeCompare(next);
        }
    });
}

// 문자열을 단순히 비교연산자를 사용해 정렬하면 안된다.
// localeCompare를 사용
