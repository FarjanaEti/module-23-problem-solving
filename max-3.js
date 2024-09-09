function maxnumber(num1,num2,num3){
   if(num1>num2 && num1>num3){
    return num1;
   }
   else if(num2>num1 && num2>num3){
    return num2;
   }
   else{
   return num3;
   }
}
// const reslt=maxnumber(4,6,2);
// console.log(reslt)

const max=Math.max(4,6,3)
console.log(max)