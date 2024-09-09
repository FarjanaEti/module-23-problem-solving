const phones=[
{name:'saban', price:210, camera:3} ,                           
{name:'body wash', price:250, camera:4} ,                           
{name:'samsang', price:220, camera:2},                            
 {name:'sampu', price:200, camera:5},                            
 {name:'perfume', price:100, camera:1}                            
]
function quantityprice(quantity){
     let totalprice=0;                         
  for(const quan of quantity){
//      console.log(quan)  
     const p=quan.price*quan.camera; 
     totalprice=totalprice+p; 
//      console.log(p);                     
  }
  return totalprice;
}
const total=quantityprice(phones);
console.log(total)