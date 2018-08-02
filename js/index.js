//let num;
//do {
//    num = parseInt(prompt(''Enter namber in sequence'));
//} while(isNaN(num));

function fib(n) {
  a = 1;
  b = 1; 
  if(n==1)
  {
    alert(a);
  }
  else if(n==2)
  {
    alert (a + "," +b);
  }
  else if(n>=3)
  {
    
    for (let i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  alert(a+ " " + b); 
  alert(c);         
   }    
  }


