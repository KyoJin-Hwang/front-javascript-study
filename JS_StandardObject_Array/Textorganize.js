const arr = ["A", "B", "C"];

arr.splice(2, 0, "X");

// (인덱스 위치, 인덱스 삭제갯수, 추가할 내용)
console.log(arr); // [ 'A', 'B', 'X', 'C' ]

const arr2 = [1, 2, 3, 4];
arr2.splice(2);
// 한개만 적을경우 그인덱스부터 전체 제거
console.log(arr2); // [ 1, 2 ]
