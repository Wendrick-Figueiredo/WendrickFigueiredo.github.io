// Carrossel
const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
  "07.jpeg",
  "08.jpeg",
  "09.jpeg",
  "10.jpeg",
  "11.jpeg"
];
let currentImage = 0;

document.getElementById("next").onclick = () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("carousel-img").src = images[currentImage];
};

document.getElementById("prev").onclick = () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById("carousel-img").src = images[currentImage];
};

// Frases românticas
const phrases = [
  "Você é a razão do meu sorriso todos os dias.",
  "Meu lugar favorito é dentro do seu abraço.",
  "Com você, cada dia é especial.",
  "Te amo mais do que ontem e menos que amanhã.",
  "Você é meu sonho que virou realidade."
];
let currentPhrase = 0;

function changePhrase() {
  currentPhrase = (currentPhrase + 1) % phrases.length;
  document.getElementById("phrase").textContent = phrases[currentPhrase];
}

// Corações flutuantes
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
