function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter((item) => {
        return item % divisor === 0;
    }).sort((a, b) => {return a - b});
    return !answer.length ? [-1] : answer;
}
