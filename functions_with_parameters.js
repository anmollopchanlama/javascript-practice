// Write a function named alertPayload.Give it a parameter named 
// payload.Inside the function, print the value of that payload.
// Call the function at the bottom, passing the string
//  "<script>alert(1)</script>" into it as the argument.

function alertPayload ( payload) {
    
    console.log(payload);

}

alertPayload('<script>alert(1)</script>');