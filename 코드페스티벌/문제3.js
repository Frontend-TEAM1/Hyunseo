/* 3. 변수의 타입) 다음 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));

1) undefined
2) string
3) number
4) object
*/

//답) 4번   이유: 원시타입을 제외한 모든 객체는 object 타입으로 배열도 object 타입이기 때문에.

const arr = [100, 200, 300];
console.log(typeof arr);
