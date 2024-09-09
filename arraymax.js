let arr=[12,21,14,25,19];
 function arraymax (number){
  let maxindex=arr[0];
//   console.log(maxindex)
    for(const num of number){
     if(maxindex<num){
          maxindex=num;                    
     }
    }                          
return maxindex;
 }
 const max=arraymax(arr);
 console.log(max);