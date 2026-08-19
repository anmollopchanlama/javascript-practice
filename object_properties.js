// Create a standard object named exploitConfig containing one 
// property: target set to "admin".Create a variable named 
// payloadKey and assign it the string value "vector".Using 
// bracket notation and your payloadKey variable, dynamically 
// add a new property to the exploitConfig object with the string
//  value "<script>alert(1)</script>".Update the original target 
//  property to "user" using standard dot notation.Print the full 
//  exploitConfig object to the terminal using console.log().



const exploitConfig = {
    target: "admin",
    

}
let payloadKey = "vector";
exploitConfig[payloadKey] = "<script>alert(1)</script>"
exploitConfig.target = "user"

console.log(exploitConfig);