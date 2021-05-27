"use strict";
document.querySelector(".logo").addEventListener("click", function () {
  location.href = "http://letslearn.getenjoyment.net/";

  // document.querySelector(".logo").textContent = "LetsLearn";
});
document.querySelector(".logo").addEventListener("mouseover", function () {
  document.querySelector(".logo").textContent = "LetsLearn";
  this.style.backgroundColor = "rgb(9, 99, 85)";
});

document.querySelector(".logo").addEventListener("mouseout", function () {
  document.querySelector(".logo").textContent = "#Game";
  this.style.backgroundColor = "";s
});

document.getElementById("checked").focus();
let highscore = 0;
let score = 20;
let sno;
function secNumber() {
  sno = Math.trunc(Math.random() * 20 + 1);
  // console.log(sno);
}
secNumber();
function resetGame() {
  secNumber();
  document.getElementById("checked").focus();
  score = 20;
  highscore = 0;
  // console.log(sno);
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".guess").value = null;
  document.querySelector(".low").style.backgroundColor = "";
  document.querySelector(".low").style.fontSize = "";
  document.querySelector(".high").style.backgroundColor = "";
  document.querySelector(".high").style.fontSize = "";
  document.querySelector(".correct").style.backgroundColor = "";
  document.querySelector(".correct").style.fontSize = "";
  document.querySelector(".number").style.color = "";
  document.querySelector(".number").style.backgroundColor = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
}
const resetGuessGame = function restartGame() {
  resetGame();
};
const startGuessGame = function checkNumber() {
  const guess = Number(document.querySelector(".guess").value);
  document.getElementById("checked").focus();
  if (score > 5) {
    if (!guess) {
      document.querySelector(".message").textContent =
        "😜Select number first...";
    } else {
      if (guess === sno) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector(".correct").style.backgroundColor =
          "rgb(12, 133, 38)";
        document.querySelector(".correct").style.fontSize = "20px";

        if (score >= 15) {
          document.querySelector(".message").textContent =
            "😎Execellent job...";
        }
        if (score > 10 && score < 15) {
          document.querySelector(".message").textContent = "✔Good job";
        }
        if (score >= 5 && score < 10) {
          document.querySelector(".message").textContent = "😊Keep it up...";
        }
        document.querySelector(".number").textContent = sno;
        document.querySelector(".number").style.color = "#111";
        document.querySelector(".number").style.backgroundColor =
          "rgba(12, 186, 27, 0.3)";

        document.querySelector(".high").style.backgroundColor = "";
        document.querySelector(".high").style.fontSize = "";
        document.querySelector(".low").style.backgroundColor = "";
        document.querySelector(".low").style.fontSize = "";
      } else if (guess > sno) {
        score--;
        document.querySelector(".message").textContent =
          "Greater than Secret...";
        document.querySelector(".score").textContent = score;
        document.querySelector(".high").style.backgroundColor =
          "rgb(214, 41, 41)";
        document.querySelector(".high").style.fontSize = "20px";

        document.querySelector(".correct").style.backgroundColor = "";
        document.querySelector(".correct").style.fontSize = "";

        document.querySelector(".low").style.backgroundColor = "";
        document.querySelector(".low").style.fontSize = "";
      } else if (guess < sno) {
        score--;
        document.querySelector(".message").textContent = "Less than Secret...";
        document.querySelector(".score").textContent = score;
        document.querySelector(".low").style.backgroundColor =
          "rgb(209, 204, 47)";
        document.querySelector(".low").style.fontSize = "20px";

        document.querySelector(".correct").style.backgroundColor = "";
        document.querySelector(".correct").style.fontSize = "";
        document.querySelector(".high").style.backgroundColor = "";
        document.querySelector(".high").style.fontSize = "";
      }
    }
  } else {
    document.querySelector(".message").textContent =
      "😒Never Give up! Try again...";
    document.querySelector(".number").style.backgroundColor =
      "rgb(214, 41, 41)";
    // resetGame();
  }
};

document.querySelector(".restart").addEventListener("click", resetGuessGame);

document.querySelector(".check").addEventListener("click", startGuessGame);

var modal = document.getElementById("myModal");
var Loose = document.getElementById("loose");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
loose.onclick = function () {
  if (score <= 5) {
    modal.style.display = "block";
    document.querySelector(".modaltext").textContent =
      "You Loose the Game Try NewGame! ";
    document.querySelector("#newgame").addEventListener("click", function () {
      resetGame();
      modal.style.display = "none";
    });
  }
  if (highscore > 5) {
    modal.style.display = "block";
    document.querySelector(".modaltext").textContent = "Welldone Winner! ";
    document.querySelector("#newgame").addEventListener("click", function () {
      resetGame();
      modal.style.display = "none";
    });
  }
};
