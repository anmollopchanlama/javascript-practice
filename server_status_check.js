// Write a script that simulates checking a server's status 
// code:Ask the user to input a status code number (200, 404, 
// or anything else).Place your default case at the very top 
//  of the switch statement to log "Unknown Status Error".Add
//  case 200 to log "Success".Add case 404 to log "Not Found".
//  Write it out, run it in Node, and send it over! I will 
//  tell you 
// directly if it is correct or it is wrong.

const prompt = require('prompt-sync')();
let status = Number(prompt("enter a status code: "));
let text;

switch(status){
    default:
        console.log("Uknowon status Error")
        break;

    case 200:
        console.log("Success")
        break;

    case 404:
        console.log("Not found")
        break;
}
