/* 16. 로꾸거
문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

*입출력*
입력: 거꾸로
출력: 로꾸거
*/

function reverse(a) {
  const b = a.split('');
  const c = b.reverse();
  const d = c.join('');
  console.log(d);
}

reverse('거꾸로');
