// Write a JavaScript function named calculateElectronicsBudget that 
// takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(num1,num2,num3){
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

 const laptoptotal=laptop*num1;
 const tablettotal=tablet*num2;
 const mobiletotal=mobile*num3;
  const total=laptoptotal+tablettotal+mobiletotal;
  return total;
}
const totalprice=calculateElectronicsBudget(2,3,5);
console.log(totalprice);