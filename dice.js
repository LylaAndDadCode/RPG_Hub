function roll(upperLimit, numberDie){
  let x = 0;
  let result = ""
  while (x < numberDie) {
    roll= Math.floor(Math.random() * upperLimit) + 1;
    result = result + roll.toString() + "   ";
    x = x +1;
  }
  
    document.getElementById("demo").innerHTML = result;
  
}