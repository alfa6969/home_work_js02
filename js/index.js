let n;
do {
    n = parseInt(prompt('Enter namber in sequence'));
} while(isNaN(n));

//function fib(n) {
//  let a = 1;
//  let b = 1; 
 // if(n === 1) {
 //   alert(a);
 // }
 // else if(n === 2) {
 //   alert (a + "," +b);
 // }
 // else if(n >= 3) {
 //   for (let i = 3; i <= n; i++) {
 //   const c = a + b;
 //   a = b;
 //   b = c;
 // }
 //  }    
 // } alert (fib(n));



// Лінійна
  let a = 1;
  let b = 1;
function fibonacci(n) {
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
const result = fibonacci(n);
alert ('Namber Fibonacci' + result);

//Рекурсивний
let r;
do {
    r = parseInt(prompt('Enter namber in sequence'));
} while(isNaN(r));

function fibonacciR(r) {
  return r <= 1 ? r : fibonacciR(r - 1) + fibonacciR(r - 2);
}
alert('Namber Fibonacci' + fibonacciR(r));



