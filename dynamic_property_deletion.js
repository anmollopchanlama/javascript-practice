// Create an object named vulnMap with two properties: cve set to 
// "CVE-2026-0001" and score set to 9.8.Create a standalone
//  variable named keyToDelete set to "score".Using bracket 
//  notation and your keyToDelete variable, delete the score 
//  property completely from the object.Print the full vulnMap 
//  object.


let keyToDelete = "score"
const vulnMap = {
    cve : "CVE-2026-0001",
    score: 9.8
}


delete vulnMap[keyToDelete]


console.log(vulnMap)