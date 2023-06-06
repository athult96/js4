var readlineSync =require("readline-sync");
  let num= readlineSync.question("enter a number :");

  let a=""

 for(let i=1; i<=num;i++){
    for(let j=1;j<=i;j++){
       a += j;
    }
    a+="\n";

 }

 console.log(a);