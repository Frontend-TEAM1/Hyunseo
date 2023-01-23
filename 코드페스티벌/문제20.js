/* 20. 몫과 나머지
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

*입출력*
입력: 10 2
출력: 5 0
*/

function share(str) {
  let separate = str.split(' ');
  let numArr = separate.map((i) => Number(i));
  let share = parseInt(numArr[0] / numArr[1]);
  let remainder = numArr[0] % numArr[1];
  let arr2 = Array.of(share, remainder);
  let num = arr2.toString();
  console.log(num, ',', typeof num);
  let result = num.replace(',', ' ');
  return result;
}

console.log(share('10 2'));

/*
숫자 타입의 배열을 문자열로 변환 -> 배열.toString(); // 5, 0
, 를 공백으로 대체 -> 문자열.replace(',' , ' ') // 5 0
*/
