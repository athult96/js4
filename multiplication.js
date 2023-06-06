var readlineSync =require("readline-sync");
 let num= readlineSync.question("entera number :");

 for(i=1 ; i<=10 ; i++)
 
 console.log(i,"x",num,"=",i*num);