// Find the friend with the smallest name.
const heights2 = ['rahim', 'Eti', 'rafi', 'rono', 'rashed'];

function smallestname(name){
  let small=heights2[0];                            
// console.log(small);
for(const word of name){
//console.log(word); 
// console.log(word.length) 
if(small.length>word.length){
   small=word
}                   
}
return small;
}
const Sname=smallestname(heights2);
console.log(Sname)
