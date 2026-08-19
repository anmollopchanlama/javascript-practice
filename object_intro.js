// Create an object variable named targetProfile (use const).Give 
// it three properties inside the object literal structure:url:
//  set to "http://target.com"parameter: set to "search"hasXSS: 
//  set to true. Use console.log() to print out only the value of 
//  the parameter property using dot notation.


const targetProfile = {
    url: "http://target.com",
    parameter: "search",
    hasXSS: true
};

console.log(targetProfile.parameter);
console.log(targetProfile["parameter"]);