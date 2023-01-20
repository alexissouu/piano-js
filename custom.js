const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
  audio.addEventListener("ended", function(){
    key.classList.remove("playing");
  });
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);


const startBump = document.getElementById("start-beat");
startBump.addEventListener("click", beatbox);

function beatbox() {
    setTimeout(() => {playNote({keyCode:71});},500);
    setTimeout(() => {playNote({keyCode:71});},1000); 
    setTimeout(() => {playNote({keyCode:65});},1500); 
    setTimeout(() => {playNote({keyCode:69});},2000); 
    setTimeout(() => {playNote({keyCode:69});},2500); 
    setTimeout(() => {playNote({keyCode:89});},3000); 
    setTimeout(() => {playNote({keyCode:89});},3500); 
    setTimeout(() => {playNote({keyCode:83});},4000); 
    setTimeout(() => {playNote({keyCode:70});},4500);
    setTimeout(() => {playNote({keyCode:71});},5000); 
    setTimeout(() => {playNote({keyCode:71});},5250); 
    setTimeout(() => {playNote({keyCode:65});},5500); 
    setTimeout(() => {playNote({keyCode:69});},5850); 
    setTimeout(() => {playNote({keyCode:69});},6000); 
    setTimeout(() => {playNote({keyCode:89});},6250); 
    setTimeout(() => {playNote({keyCode:89});},6500); 
    setTimeout(() => {playNote({keyCode:83});},6850); 
    setTimeout(() => {playNote({keyCode:70});},7000);
    setTimeout(() => {playNote({keyCode:71});},7250); 
    setTimeout(() => {playNote({keyCode:71});},7500); 
    setTimeout(() => {playNote({keyCode:65});},7850); 
    setTimeout(() => {playNote({keyCode:69});},8000); 
    setTimeout(() => {playNote({keyCode:69});},8250); 
    setTimeout(() => {playNote({keyCode:89});},8500); 
    setTimeout(() => {playNote({keyCode:89});},8850); 
    setTimeout(() => {playNote({keyCode:83});},9000); 
    setTimeout(() => {playNote({keyCode:70});},9250);
      }



