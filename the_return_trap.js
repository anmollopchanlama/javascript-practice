// Write a function named makePayload.Give it one parameter named 
// tag.Inside the function, do not use console.log. Instead, use
//  the return keyword to send back a string that wraps the tag 
//  around numbers, like this: return "<" + tag + ">1</" + tag + 
//  ">";At the bottom, call the function passing "div" into it,
//   save that returned result inside a new variable named  
//   finalHTML, and then print finalHTML.

function makePayload(tag){
    console.log(tag)
    return "<" + tag + ">1</" + tag + ">";
    
}


