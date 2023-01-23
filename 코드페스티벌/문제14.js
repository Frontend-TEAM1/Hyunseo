/* 14. 3의 배수 인가요?
영희는 친구와 게임을 하고 있습니다. 서로 돌아가며 랜덤으로 숫자를 하나 말하고
그게 3의 배수이면 박수를 치고 아니면 그 숫자를 그대로 말하는 게임입니다.

입력으로 랜덤한 숫자 n이 주어집니다.

만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해주세요.

*입출력*

입력: 3
출력: 짝

입력: 2
출력: 2
*/

function multiple(a) {
  if (a % 3 == 0) {
    return '짝';
  } else {
    return a;
    // console.log(a); //=>일 경우,
  }
}

console.log(multiple(4)); // 여기가 undefined 찍힘
// multiple(4); // 여기는 4 찍힘

// if문의 실행문이 console.log(변수)로 끝나는 경우, if문 내의 값을 보여주고 if문 밖의 console.log(함수(변수)) 값은 반환하지 않음. (반환하는 값 없이 console.log 값만 보여주고 끝.)
// else {console.log(a)} 값은 4, console.log(multiple(4)) 값은 undefined

// if문의 실행문이 return으로 끝나는 경우, console.log(함수(변수))의 값 반환. 함수(변수) 값을 나타낼수 있음.
