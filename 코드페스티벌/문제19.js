/* 19. 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.
*/

function square(str) {
  let separate = str.split(' ');
  let numArr = separate.map((i) => Number(i));
  let arr2 = Array(numArr[1]).fill(numArr[0]); // [ 2, 2, 2, 2, 2 ]
  let result = arr2.reduce((multify, n) => {
    return multify * n;
  });
  console.log(result);
}

square('2 5');

/*
2의 5승 => 2를 5번 곱하기
이는 2가 5개 있는 배열이 필요
Array(5).fill(2) => [2, 2, 2, 2, 2]
*/
