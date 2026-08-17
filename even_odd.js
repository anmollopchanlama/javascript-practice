//  Ask the user for a 
// number. If the number is even, print "Even". Otherwise,
//  print "Odd".

const prompt =  require('prompt-sync')();

let number = prompt('Enter a number:');

if ( number%2 == 0) {
    console.log("The number is Even.")
}

else{
    console.log("The number is Odd");
}