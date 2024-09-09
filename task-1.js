// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(number){
   let min=heights2[0];
  for(const num of number)
     if(min>num){
       min=num;                       
     }
     return min;
}
const minest=lowestNumber(heights2);
console.log(minest)