// Build a condition that checks if a user is allowed to access an 
// admin panel.Set role = "user", twoFactor = true, and 
// backupKey = null.Create a variable named hasAccess.
// Set hasAccess using these rules:The user must be an 
// "admin" AND (&&) have twoFactor enabled.OR (||) their 
// backupKey must NOT be null (use ?? "MISSING" to check if it 
// falls back to a missing string).Log hasAccess to the terminal.


let role = "admin";
let backupKey = null ?? 'MISSING'
let hasAccess = true;
let twoFactor = true;

if ( (role === "admin" && twoFactor == true) || backupKey != 'MISSING'  ){
    console.log(hasAccess);
}
else{
    console.log("You are not logged in ");
}