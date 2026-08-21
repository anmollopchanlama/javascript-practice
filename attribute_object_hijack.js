// Create an object variable named xssExploit.Inside the object,
// add one initial property: vector set to "script-tag".Create a 
// standalone variable named newEvent and assign it the string 
// value "onfocus".Using bracket notation and your newEvent
// variable, dynamically add a new property to the xssExploit
// object with the string value "alert(1)".Update the original 
// vector property to "attribute-injection" using standard dot
// notation.Print the full xssExploit object to the terminal 
// using console.log().

const xssExploit = {
    vector : "script-tag",

}
let newEvent = "onfocus"

xssExploit[newEvent] = "alert(1)";
xssExploit.vector = "attribute-injection"

console.log(xssExploit);
