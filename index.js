for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

// variable set to the tom1 sound
var tom1 = new Audio("/sounds/tom-1.mp3");

// a function that takes in the inner html and plays the sound according to the letter
let innerHTML = function (innerHTML) {
  switch (innerHTML) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHtml);
  }
};

// detecting click
function handleClick() {
  //button inner html
  let buttonInnerHtml = this.innerHTML;

  innerHTML(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

//Detecting button press
//plays sound depending on the key pressed down.
/*i grab the even key, which is a string and compare it
to the inner html using the function innerHTML */

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  let key = event.key;

  innerHTML(key);
  buttonAnimation(key);
});

function buttonAnimation(currentkey) {
  let activeButton = document.querySelector(`.${currentkey}`);

  activeButton.classList.add("pressed");

  //setting a clock that run and when it ends it run this function.
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
