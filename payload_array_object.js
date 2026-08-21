// Create an object named payloadBox.Inside, add one property: 
// stage set to "discovery".Create a variable named handlerKey set
//  to "onmouseenter".Using bracket notation, add that variable as 
//  a key to the object, set to the string "prompt(1)".Using dot
//  notation, update the stage property to "exploitation".Print 
//  payloadBox.


const payloadBox = {
    stage : "discovery"
}

let handlerKey = "onmouseenter";

payloadBox[handlerKey] = "prompt(1)"
payloadBox.stage = "exploitation"

console.log(payloadBox)
