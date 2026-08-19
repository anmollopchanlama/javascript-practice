// Write a standard loop that counts from 1 to 6.Inside the loop, 
// check the number:If the number is 3, use a control keyword to 
// skip it entirely without printing.If the number hits 5, use a 
// control keyword to instantly kill the entire loop right there.
// For all other 
// numbers, print them to the terminal.

let i = 1;

for ( i ; i <=6 ; i++){

if ( i == 3){
    continue;
}
else if ( i ==5 ){
    break;
}
else{
    console.log(i)
}

}