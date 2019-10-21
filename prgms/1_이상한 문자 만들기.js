function solution(s) {
    let answer = '';
    let wordList = s.split(' ');
    wordList = wordList.map((word) => {
        return changeWord(word);
    });
    function changeWord(word) {
        const charList = word.split('');
        for (let i = 0; i < charList.length; i++) {
            if (i % 2 === 0) {
                charList[i] = word.charAt(i).toUpperCase();
            } else {
                charList[i] = word.charAt(i).toLowerCase();
            }
        }
        return charList.join('');
    }
    answer = wordList.join(' ');
    return answer;
}


// 1. map() 메서드는 원 배열을 변경시키지 않는다. 단지 매핑만
// 2. 이미 할당된 string 변수에서, 인덱스 값으로 특정 자리만 변경 시킬 수 없다.


/**
 * 다른 사람 코드
 * @param s
 * @returns {string}
 */
function solution(s) {
    let answer = '';
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            answer += ' ';
            index = 0;
        } else if (index % 2 === 0) {
            answer += s.charAt(i).toUpperCase();
            index++;
        } else {
            answer += s.charAt(i).toLowerCase();
            index++;
        }
    }
    return answer;
}

// 매 ' '을 나타내는 변수를 두어, 이중으로 for문을 돌지 않게 해결했다.
