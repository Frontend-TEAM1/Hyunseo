/* 18. 평균 점수

영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
단, 소숫점 자리는 모두 버립니다.

*입출력*

입력: 20 30 40
출력: 30
*/

function average(str) {
  let split = str.split(' '); //
  let numArr = split.map((i) => Number(i)); //
  let sum = numArr.reduce((sum, n) => {
    return sum + n;
  }); // 90
  let devide = sum / numArr.length;
  let result = parseInt(devide);
  console.log(result);
}

average('151 39 48');

/*
1. 숫자를 공백으로 구분 -> array.split(' ')   공백으로 문자열인 숫자를 각각의 요소로 배열화함. [ '20', '30', '40' ]
2. 문자열을 숫자로 타입 변환 -> array.map((i) => Number(i)) [ 20, 30, 40 ]
2. 누적값 -> array.reduce((이전값들의 합, 다음 값)) => {return sum+n;});
3. 평균값 구하기 -> 누적값 / array.length;
4. 실수를 정수로 변경 -> parseInt(값)

*/
