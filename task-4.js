// You are given an array of phone objects, each containing information about
//  the model, brand, and price. Your task is to write a JavaScript function
//  named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 9000 },
  { model: "PhoneB", brand: "Samsung", price: 4000 },
  { model: "PhoneC", brand: "Oppo", price: 2000 },
  { model: "PhoneD", brand: "Nokia", price: 3000 },
  { model: "PhoneE", brand: "Iphone", price: 1000 },
  { model: "PhoneF", brand: "HTC", price: 4000 },
                          ];
function findAveragePhonePrice(price){
     let pricetotal=0;                         
  for(const model of price){
     pricetotal=pricetotal+model.price;
  }
  return pricetotal;
}
const total=findAveragePhonePrice(phones)
console.log(total);