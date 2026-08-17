// Ask the user for the current temperature.If it is less
//  than 15, set weather = "Cold".If not, but it is less than 30, 
//  set weather = "Warm".Otherwise, set weather = "Hot".

const prompt = require('prompt-sync')();

let current_temp =  prompt("Enter the current temperature: ");
let weather;

if (current_temp < 15){ 
    console.log(weather = 'Cold')
}

else if(current_temp >= 15 && current_temp < 30){
    console.log(weather = 'Warm')
}

else{
    console.log(weather="Hot")
}