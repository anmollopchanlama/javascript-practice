// Create an if / else statement. If a variable named time isless
//  than 12, set a variable named greeting to "Good morning". 
// Otherwise, set greeting to "Good afternoon".
const prompt = require('prompt-sync')();
let isless =  prompt("Enter the time:");
let greeting;

if ( isless < 12) {
    console.log(greeting = 'Good morning' )
}

else {
    console.log(greeting = 'Good afternoon')
}