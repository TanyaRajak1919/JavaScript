//for given array with price of 5 times [250,645,300,900.50] all items have an offer of 10% OFF on them .
// change the array to  store final price after applying offer.
let price=[250,645,300,900,50];
let idx=0;

for(let val of price){


//console.log(`value at index &{idx}=${val}`);
let offer = val /10;
price[idx]=price[idx]-offer;
console.log(`value after offer = ${price[idx]}`);
idx++;
}