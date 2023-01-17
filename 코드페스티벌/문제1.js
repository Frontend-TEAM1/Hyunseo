// 1. 배열의 삭제) 다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.
// var nums = [ 100, 200, 300, 400, 500 ]

const nums = [100, 200, 300, 400, 500];
const deleteNums = nums.splice(3, 2);
console.log(nums); // [ 100, 200, 300 ]

/*
[배열의 삭제]
원본배열.splice(삭제할 요소의 시작 인덱스, 삭제할 요소 갯수)
 => 삭제될 요소들 반환    console.log(deleteNums); // [ 400, 500 ]
 => 원본배열 변경
*/
