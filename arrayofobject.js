const phones=[
  {name:'samsang', price:2000, camera:'12mp'},                            
  {name:'samsang', price:2100, camera:'12mp'} ,                           
  {name:'samsang', price:2200, camera:'12mp'},                            
  {name:'samsang', price:1000, camera:'12mp'}                            
]
function arrayofobject (number){
let maxindex=phones[0];
//   console.log(maxindex)
 console.log(maxindex.price)

  for(const num of number){
// console.log(num.price)                           
 if(num.price>maxindex.price){
  maxindex=num;                    
   }
  }                          
 return maxindex;
 }
 const max=arrayofobject(phones);
console.log(max);