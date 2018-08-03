let num;
do {
    num = parseInt(prompt('Enter namber in sequence'));
} while(isNaN(num));

function fib(n) {
  let a = 1;
  let b = 1; 
  if(n === 1) {
    alert(a);
  }
  else if(n === 2) {
    alert (a + "," +b);
  }
  else if(n >= 3) {
    
    for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  alert(a+ " " + b); 
  alert(c);
   }    
  } document.write(c);



// Лінійна
//function fibonacci(n) {
//  if (n <= 2)
//  return 1;
//  let x = 1;
//  let y = 1;
//  let z = 0;
//  for (let i = 3; i < n; i++) {
//    z = x + y;
//    x = y;
//    y = z;
//  }
//  return z;
//}

