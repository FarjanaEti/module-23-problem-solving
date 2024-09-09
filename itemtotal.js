function pricetotal(item1,item2,item3){
   const amm=100;
   const jaam=200;
   const lichu=300;                           
   const ammtotal=amm*item1;
   const jaamtotal=jaam*item2;
   const lichutotal=lichu*item3;
   
   const totalp=ammtotal+jaamtotal+lichutotal;
   return totalp;
}
const total=pricetotal(5,3,2);
console.log(total);