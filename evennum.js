var readlineSync =require("readline-sync");
 let num= readlineSync.question("Enter the value of an array :");

 const a=[]
 let b=0
 for(let i=0;i<num;i++){
    a[i]=readlineSync.question("");
    if(a[i]%2==0){
        b=1+b;
    }
 }
 console.log("Number of even numbers in the given array is" ,b);