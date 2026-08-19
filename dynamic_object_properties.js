// Create an object named scanner.Inside the object, add one
//  property: status set to "offline".Create a standalone variable 
//  named scanMode set to "aggressive".Using bracket notation and 
//  your scanMode variable, add a new property to the scanner
//   object set to true.Print the full scanner object.

const scanner = { 
    status: "offline"
}

let scanMode = 'aggressive';

scanner[scanMode] = true;

console.log(scanner)