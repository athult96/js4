var readlineSync =require("readline-sync");
console.log("1.addition \n 2.subtraction \n 3.multiplication \n 4.division");
let operation= readlineSync.question("Enter operation :");
let num1= readlineSync.question("Enter first number :");
let num2= readlineSync.question("Enter second number :");

operation=parseInt(operation)
num1=parseInt(num1)
num2=parseInt(num2)

 switch(operation){
    case 1 :
        let a= add(num1,num2)
        console.log(num1, "+", num2, "=",a);
        break;
   case 2:
        let b=subtraction(num1,num2)
        console.log(num1, "-", num2, "=",b);
        break;
    case 3:
        let c=multiplication(num1,num2)
        console.log(num1, "*", num2, "=",c);
        break;
    case 4:
        let d=division(num1,num2)
        console.log(num1, "/", num2, "=",d);
        break;
 }

 function add(a,b){
    let sum=a+b;
    return sum;
 }
 function subtraction(a,b){
    let sum=a-b;
    return sum;
 }
 function multiplication(a,b){
    let sum=a*b;
    return sum;
 }
 function division (a,b){
    let sum=a/b;
    return sum;
 }