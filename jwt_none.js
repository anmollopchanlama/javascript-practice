// Create an object named jwtHeader.Inside the curly braces, add one property: alg set to "HS256".
// On the line below the object, use standard dot notation to change that alg property to "none".
// Print the full jwtHeader object using console.log().

const jwtHeader = {
    alg : "HS256",

}
jwtHeader.alg = "none";
console.log(jwtHeader)