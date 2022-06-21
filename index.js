var randomNumber;
var randomNumber2;
// function dice1(){

randomNumber=Math.floor((Math.random()*6)+1);

var randomImage="images/dice" + randomNumber + ".png";
var imageSource=(document.querySelectorAll("img")[0].setAttribute("src", randomImage));

randomNumber2=Math.floor((Math.random()*6)+1);
var randomImage2="images/dice" + randomNumber2 + ".png";
var imageSource2 =(document.querySelectorAll("img")[1].setAttribute("src", randomImage2));

        if (randomNumber > randomNumber2){
            document.querySelector(".heading").innerHTML='🏆 Player 1 Wins !';
        }
        else if (randomNumber < randomNumber2){
            document.querySelector(".heading").innerHTML='🏆 Player 2 Wins !';
        }
        else{
            document.querySelector(".heading").innerHTML='🏆 Draw ! 🏆';
        }
   