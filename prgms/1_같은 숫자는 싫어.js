function solution(arr) {
    let answer = [];
    answer = arr.filter((item, index) => {
        return item !== arr[index - 1];
    });
    return answer;
}
