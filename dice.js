function roll(upperLimit, numberDie){
  let x = 0;
  let result = "";
  let sum = 0;
  while (x < numberDie) {
    rolls= Math.floor(Math.random() * upperLimit) + 1;
    sum = sum + rolls;
    result = result + rolls.toString() + "   ";
    x = x + 1;
  }
  
  document.getElementById("result").innerHTML = result;
  document.getElementById("sum").innerHTML = "Sum of the dice is: " + sum;
  return;
}