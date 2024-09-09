function discount(quantity){
    const firstshirt=100;
    const secondshirt=70;
    const thirdshirt=50;

 if(quantity<=100){
    return quantity*firstshirt;                         
 }
 else if(quantity<=200){
 const first100price=firstshirt*100;                             
const extra=quantity-100;
    return first100price+extra*secondshirt;                         
 }
 else if(quantity<=300){
 const first100price=firstshirt*100; 
 const second100price=secondshirt*100; 
 const extra=quantity-200;
return first100price+second100price+extra*thirdshirt;                         
 }
 else{
      return 'muri khao';                        
 }
}
const pricetopay=discount(240)
console.log(pricetopay);