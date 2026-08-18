// Create a variable named authenticated and set it to true.
// Create a variable named accessCode.Use a ternary operator to 
// check authenticated.If true, assign it "GRANTED". If false, 
// assign it "DENIED".

const prompt = require('prompt-sync')();
let authenticated = prompt("Hello Admin! enter true or false: ");
let accessCode =  (authenticated == "true") ? "GRANTED" : "DENIED";
console.log(accessCode);


