// arrow function assignement
function getDetails(zName, zAge, zCountry) {

    function namePattern(zName) {
      let i = zName.trim().indexOf(" ");
     
    
      return `${zName.slice(0,i)} ${zName.slice(i+1,i+2).toUpperCase()}.` ; 
    } 
  
  
    
   
    function ageWithMessage(zAge) {
      
        
        let age=zAge;
        age=+age.split(" ",1);
       
        return `${age}`;
      
      
    }
    
    function countryTwoLetters(zCountry) {
      return `You Live In ${zCountry.slice(0,2).toUpperCase()}`;
      // Write Your Code Here
      // Egypt => You Live In EG
      // Syria => You Live In SY
    }
    function fullDetails() {
     return `Hello ${namePattern(zName)} Your Age Is ${ageWithMessage(zAge)},${countryTwoLetters(zCountry)} `;
     
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "45 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY