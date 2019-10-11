/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x) {
	const [num1, num2] = x;
	const isBoolFirst = typeof num1 === 'number';
	const isBoolSecond = typeof num2 === 'number';

	let newArr = [];
	let totalLen = 0;

	if (isBoolFirst && !isBoolSecond) {
		totalLen += num1;
	} else if (!isBoolFirst && isBoolSecond) {
		totalLen += num2;
	} else if (isBoolFirst && isBoolSecond) {
		totalLen += (num1 + num2);
	} else {
		return 'Void!';
	}

	for (let i = 0; i < totalLen; i++) {
		newArr.push([num1, num2]);
	}

	return newArr;
}