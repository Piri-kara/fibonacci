'use strict';
// function fib(n){
//   if(n === 0){
//     return 0;
//   } else if (n === 1){
//     return 1;
//   }

//   // 関数の中で関数自信を呼び出すことを 再帰 という。
//   return fib(n - 1) + fib(n - 2);
// }

// const length = 40;
// for (let i = 0; i <= length; i++){
//   console.log(fib(i))
// }

// memoという名前のMapを作成
const memo = new Map();
// 0、1番目は予め定義されているので、初期値として格納
memo.set(0,0);
memo.set(1,1);

// Mapがnをキーとした答えを持っていれば、その値をそのまま関数の値として返す
// そうでない場合は再帰関数を計算して求め、Mapに格納して返す
function fib(n){
  if (memo.has(n)){
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

const length = 40;
for (let i = 1; i <= length; i++){
  console.log(fib(i));
}