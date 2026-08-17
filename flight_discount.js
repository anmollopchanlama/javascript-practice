// Create a scenario where a traveler gets a discount if they are 
// flying to "Europe" and their ticket class is "Business".Set 
// discount = "No discount" by default.Use an if statement with 
// the && operator to check both conditions.If both are true, 
// change discount to "You get a discount!".

let destination;
let ticket_class;
let discount = "No discount";

const prompt = require('prompt-sync')();
destination  =  prompt("Enter your travel destination in UPPERCASE: ");
ticket_class = prompt("Enter your ticker class in one word and lowercase: ");


if ( destination=='EUROPE' && ticket_class=='business'){
    console.log('You get a discount');
}

else{
    console.log(discount)
}
