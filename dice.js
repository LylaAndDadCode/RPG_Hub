function roll(numSides, numberDie){
  let x = 0;
  let result = "";
  let sum = 0;
  resetError("sides")
  resetError("number")
  
  if(numSides >=2 && numberDie >= 1) {

    while (x < numberDie) {
      
      rolls= Math.floor(Math.random() * numSides) + 1;
      sum = sum + rolls;
      result = result + rolls.toString() + "   ";
      x = x + 1;
    }
    
    document.getElementById('result').innerHTML = result;
    document.getElementById('sum').innerHTML = "Sum of the dice is: " + sum;
    return;
  } else {
      
      if (numSides < 2) {
        errorField("sides");
       //alert("needs to have at least 2 sides")
      }
      if (numberDie < 1) {
        errorField("number")
      }
  }
}

function errorField(id){
    
       //document.getElementById(id).className = document.getElementById(id).className + " error";
       document.getElementById(id).style.border = "2px solid red";
   //    document.getElementById(id).style.borderWidth = "10px";
}

function resetError(id){
  document.getElementById(id).style.border = '#ccc';
       //document.getElementsById(id).style.border = ""; 
}