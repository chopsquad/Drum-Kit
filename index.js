for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

// variable set to the tom1 sound
var tom1 = new Audio("/sounds/tom-1.mp3");

function handleClick() {
  tom1.play(); 
}
