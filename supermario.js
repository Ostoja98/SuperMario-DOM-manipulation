var mario = document.querySelector("img");
var background = document.querySelector("body");
var isMarioMoving = false;
var moveInterval;
var move = 0;
function marioMove(e) {
  var pressedButton = e.keyCode;
  if (!isMarioMoving) {
    if (pressedButton === 39) {
      isMarioMoving = true;
      mario.setAttribute("src", "./mario_running.gif");
      mario.className = "marioTurnedRight";
      moveInterval = setInterval(() => {
        move -= 1;
        background.style.backgroundPosition = move + "px";
      });
    }
    if (pressedButton === 37) {
      isMarioMoving = true;
      mario.setAttribute("src", "./mario_running.gif");
      mario.className = "marioTurnedLeft";
      moveInterval = setInterval(() => {
        move += 1;
        background.style.backgroundPosition = move + "px";
      });
    }
    if (pressedButton === 38) {
      isMarioMoving = true;
      mario.style.bottom = "250px";
    }
  }
}
function marioStop() {
  isMarioMoving = false;
  clearInterval(moveInterval);
  mario.style.bottom = "150px";
  mario.setAttribute("src", "./mario.png");
}

document.addEventListener("keydown", marioMove);
document.addEventListener("keyup", marioStop);
