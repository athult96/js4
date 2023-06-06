var readlineSync =require("readline-sync");
 let num= readlineSync.question("enter a limit :");
let a=0
for(i=1;i<=num;i++){
    if(i%2==1){
        a=i+a
    }
}
console.log(a);