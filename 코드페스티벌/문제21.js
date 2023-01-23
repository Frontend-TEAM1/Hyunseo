/* 21. set은 어떻게 만드나요?
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1) let X = {1, 2, 3, 5, 6, 7};
2) let X = {};
3) let X = new Set('javascript');
4) let X = new Set(range(5));
5) let X = new Set();
*/

// 답 : 3번, 5번

let X3 = new Set('javascript');
let X5 = new Set();

console.log(X3);
console.log(X5);
