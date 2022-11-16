const music = document.querySelectorAll("audio");
const audio = document.querySelectorAll("div.cube");

for (let i = 0; i < audio.length; i++) {
  audio[i].classList.add("btn");
  audio[i].addEventListener("click", (e) => {
    if (audio[i].classList.contains("btn")) {
      music[i].play();
      audio[i].classList.remove("btn");
    } else if (!audio[i].classList.contains("btn")) {
      sounds(i);
    }
  });
}

function sounds(i) {
  music[i].pause();
  music[i].currentTime = 0;
  audio[i].classList.add("btn");
}
