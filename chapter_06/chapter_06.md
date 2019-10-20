 # ✅ chapter_06
## Object에서 해당 키값을 가지고 있는지(Array의 경우, key = index)
* [key] in object
```javascript
const obj = {name: 'obj-name'};
'name' in obj //  true
'obj-name' in obj // false :: key 값으로 검사해야 한다.
```
* hasOwnProperty([key])
```javascript
const obj = {name: 'o' +
 'bj-name'};
obj.hasOwnProperty('name'); //  true
obj.hasOwnProperty('obj-name') // false :: key 값으로 검사해야 한다.
```
> [chapter_06.js](https://github.com/zxczoxc125/Learning-JavaScript-Data-Structures-and-Algorithms/blob/zxczoxc125/chapter_06/chapter_06.js)

## Object.keys()
* Object의 키들을 배열의 형태로 리턴해준다.
* 단, 비교적 최신 브라우저는 지원하지 않는다.

## for in문
* for (let [key] in array) {...}
* 배열에서도 가능하나, 성능상 권장하지 않는다.

## 교집합을 구할 경우,
* 어차피 둘 다 속해야 하기 때문에, 하나를 기준으로 잡아 for문을 돌리면 된다.
