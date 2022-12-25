var randomNum1 = Math.floor(Math.random()* 6 + 1);
var randomNum2 = Math.floor(Math.random()* 6 + 1);

var images1 = "images/dice"+ randomNum1 + ".png";
var images2 = "images/dice"+ randomNum2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1); 
document.querySelector(".dice .img2").setAttribute("src",images2); 

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player1 Wins"   ;
  } else if (randomNum1 == randomNum2) {
    document.querySelector("h1").innerHTML = "DRAW"   ;
  } else {
    document.querySelector("h1").innerHTML = "Player2 Wins"   ;
  }