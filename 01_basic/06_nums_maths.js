const score = 100;
const balance = new Number(500)
console.log(balance);
console.log(balance.toFixed(2));
console.log(balance.toLocaleString("en-IN"));
console.log(balance.toString().length);



// ******************************************Maths *************************************

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(2,5,3,7))
console.log(Math.max(2,5,3,7))

console.log((Math.random()*10)+1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min +1)) + min)