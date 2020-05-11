'use strict';
function fib(n){
  if(n === 0){
    return 0;
  } else if (n === 1){
    return 1;
  }

  // 関数の中で関数自信を呼び出すことを 再帰 という。
  return fib(n - 1) + fib(n - 2);
}

const length = 40;
for (let i = 0; i <= length; i++){
  console.log(fib(i))
}