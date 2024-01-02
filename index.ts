import products from './products'

let productName: string = "tote bag"

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = '112 N 12TH AVE NYC, NY';

const product = products.filter(product =>
{return product.name === productName;}
)[0];


if (product.preOrder) {
  console.log("\n","We’ll send you a message when your product is on it’s way.");
}

if (Number(product.price) > 25) {
  console.log("shipping on this product is free");
  shipping = 0;
}
else {
  shipping = 5;
}

if (shippingAddress.match("NY" || "NEW YORK")) {
  taxPercent = 0.1;
}
else {
  taxPercent = .05;
}
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping


console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${Number(product.price)}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);



// console.log("your tax percentage is "+ (taxPercent * 100)+ "%")

// console.log(product)