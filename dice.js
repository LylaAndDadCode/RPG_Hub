
function sleep (timeMs) {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}

async function roll(numSides, numberDie){
  let x = 0;
  let result = "";
  let sum = 0;
  resetError("sides");
  resetError("number");
  errorText("sidesError", " ");
  errorText("numberError", " ");
  
  var removeDice = document.getElementById("result");

  
  while (removeDice.hasChildNodes()) {  
    removeDice.removeChild(removeDice.firstChild);
  }
  
  document.getElementById('sum').innerHTML = "";
  
  if(numSides >=2 && numberDie >= 1) {
    //make the empty dice
    for (let y = 0; y < numberDie; y++){
      let emptyDice = document.createElement("div"); //<div></div>
      emptyDice.setAttribute("id", "dice" + y); //<div id="dice1"></div>
      document.getElementById("result").appendChild(emptyDice); 
    }
    
    // loop to change values on dice to simulate a roll
    for (let y = 0; y < 50; y++) {
      await sleep(100).then(() => {
        //if (numSides != 2){ 
          for (let z = 0; z < numberDie; z++){
            let randomNum = Math.floor(Math.random() * numSides) + 1
            if (numSides != 2){
             document.getElementById("dice" + z).innerHTML = randomNum;
            } else {
              if (randomNum == 1) {
                document.getElementById("dice" + z).innerHTML = 'H';
              } else {
                 document.getElementById("dice" + z).innerHTML = 'T';
              }              
              
            }
          }
          
/*        } else { // if a 2 sides dice then change to a coin and use H for heads and T for tails
          if (y % 2 == 0){
            for (let z = 0; z < numberDie; z++){
              document.getElementById("dice" + z).innerHTML = 'H';
            }
          } else {
            for (let z = 0; z < numberDie; z++) {
              document.getElementById("dice" + z).innerHTML = 'T';
            }
          } */
        
      })
    }
   
    while (x < numberDie) {
      
      rolls= Math.floor(Math.random() * numSides) + 1;
      sum = sum + rolls;
      if (numSides == 2) {
        let heads = 0;
        if (rolls == 1) {
          heads = 'T';
        } else {
          heads = 'H';
        }
        document.getElementById("dice" + x).innerHTML = heads;   
      } else {
        //result = result + rolls.toString() + "   
        
        //let dice = document.createElement("div"); //<div></div>
        document.getElementById("dice" + x).innerHTML = rolls.toString();    
        //document.getElementById("result").appendChild(dice); 
      }
      x = x + 1;
    }
   
    //document.getElementById('result').innerHTML = result;
    if (numSides == 2) {
      document.getElementById('sum').innerHTML = "Coins aren't Dice, <strong>PSA!</strong>";
    } else {
      document.getElementById('sum').innerHTML = "Sum of the dice is: " + sum;
    }
    return;
  } else {
      
    if (numSides < 2) {
      errorField("sides");
      errorText("sidesError", "Must have more than 1 side");        
    }
    if (numberDie < 1) {
      errorField("number");
      errorText("numberError", "Must have at least 1 dice");
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

function errorText(id, text){
  document.getElementById(id).innerHTML = text;
}




