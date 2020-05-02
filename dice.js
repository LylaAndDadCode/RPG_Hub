function roll(numSides, numberDie){
  let x = 0;
  let result = "";
  let sum = 0;
  
  
  if(numSides >=2) {
    
    while (x < numberDie) {
      rolls= Math.floor(Math.random() * numSides) + 1;
      sum = sum + rolls;
      result = result + rolls.toString() + "   ";
      x = x + 1;
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("sum").innerHTML = "Sum of the dice is: " + sum;
    return;
  } else {
    alert("needs to have at least 2 sides")
  }
}