/* 9. concat을 활용한 출력 방법
다음 소소 코드를 완성하여 날짜와 시간을 출력하시오.

데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = // 빈칸을 채워주세요

console.log(result);

출력
2019-04-26 11:34:27
*/

const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

const arr1 = new Array(year, month, day);
// console.log(arr1); // [ '2019', '04', '26' ]
const dateArr = arr1.join('-');
// console.log(dateArr); // 2019-04-26
// console.log(typeof dateArr); // string

const arr2 = new Array(hour, minute, second);
const timeArr = arr2.join(':');
// console.log(timeArr); // 11:34:27
// console.log(typeof timeArr); // string

const result = dateArr.concat(' ' + timeArr);
console.log(result); // 2019-04-2611:34:27

/*
1. 1)날짜 2)시간 각각 배열 2개를 만든다.
2. 원본배열.join('-' or ':')으로 원하는 표시형식을 새로운 변수로 만든다. 이때 해당 변수의 타입은 string.
3. concat으로 날짜, 시간 값을 연결시켜준다.

concat? 두개의 문자열을 하나의 문자열로 만들어주는 역할을 하는 함수.
        입력값을 문자열 대신 배열을 사용하면 두 개의 배열을 하나의 배열로 만들어주기도 함.
*/
