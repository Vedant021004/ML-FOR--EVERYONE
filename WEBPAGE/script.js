const words = [
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Python Developer",
  "Cloud Learner",
  "Future Data Scientist"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {
  if (charIndex < words[wordIndex].length) {
    typing.innerHTML += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.innerHTML = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, 200);
  }
}

type();

const btn = document.getElementById("themeBtn");

btn.onclick = function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
};