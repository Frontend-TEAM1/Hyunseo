/*
11. for을 이용한 기본 활용
1부터 100까지 모두 더하는 code를 <pass> 부분에 완성하세요. for을 사용해야 합니다.

let s = 0;

// pass

console.log(s);
*/

let s = 0;

for (i = 1; i < 101; i++) {
  let a = s + i; // 1번 a=(0+1)  3번 a=(0+1)+2  5번 a=[(0+1)+2]+3
  s = a; // 2번 s=(0+1)  4번 s=(0+1)+2
}

console.log(s);
