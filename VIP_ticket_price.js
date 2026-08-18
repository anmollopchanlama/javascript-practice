// Ask the user for their status: "VIP" or "Regular".Use a ternary 
// operator to check their answer.If they are "VIP", set a variable
//  named ticketPrice to 50.If they are not VIP, set ticketPrice to 
// 100.Log ticketPrice to the terminal.

const prompt =  require('prompt-sync') ();
let ticketPrice;
let status = prompt("Enter your status in one word UPPERCASE: ")

let ticket  =  (status == "VIP") ? ticketPrice = 50 : ticketPrice = 100;
console.log(ticket)
