// push()
let fooditems=["potato","apple","banana","tomato"];
fooditems.push("mango");

console.log(fooditems);

// pop()
 fooditems.pop("tomato");

console.log(fooditems);

 //tostring()

 console.log (fooditems.toString());

 // concat()

let vegetables =["onion","garlic","ladyfinger"];
let result=fooditems.concat(vegetables);

console.log(result);
 //unshift
fooditems.unshift("kiwi");
console.log(fooditems);

// shift()
fooditems.shift();
console.log(fooditems);
 
//  //slice()
console.log(fooditems.slice(1,3));

//splice()

fooditems.splice(1,1);
console.log(fooditems);