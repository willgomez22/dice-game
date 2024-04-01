var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number from 1 to 6

var randomDiceImgage = "dice" + randomNumber1 + ".png"; // random dice number dice1.png - dice6.png

var randomImageSource = "./images/" + randomDiceImgage; // random ./image/dice1.png - ./image/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number from 1 to 6

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png"; // random ./image/dice1.png - ./image/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
