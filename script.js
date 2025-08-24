const image = document.getElementById("interactive-image");
const emojiContainer = document.getElementById("emoji-container");

const messages = [
  "¡Quieres ser la princesa de este negro!",
  "¡Ganoso de ir a darle unos besos solo por linda!",
  "¡A una niña buena como tú le hace falta un Ganster como yo!",
  "¡Quieres ser el chicle que me acompañe a todos lados!",
  "¡Voy a terminar de enamorarte y vas a ser mi novia oyo!",
  "¡Me encantas!"
];

const colors = [
  "text-cyan-300",
];

let currentMessageIndex = 0;

image.addEventListener("click", (e) => {
  // Mostrar mensaje solo si quedan disponibles
  if (currentMessageIndex < messages.length) {
    const message = messages[currentMessageIndex];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const messageElem = document.createElement("div");
    messageElem.textContent = message;
    messageElem.className = `message absolute text-3xl font-extrabold ${color} z-40 pointer-events-none animate-bounce`;

    // Evitar que se muestre sobre el botón (zona central)
    let x, y;
    let maxAttempts = 20;
    let attempts = 0;
    const button = image.getBoundingClientRect();

    do {
      x = Math.random() * (window.innerWidth - 250);
      y = Math.random() * (window.innerHeight - 100);
      attempts++;
    } while (
      x > button.left - 150 &&
      x < button.right + 150 &&
      y > button.top - 150 &&
      y < button.bottom + 150 &&
      attempts < maxAttempts
    );

    messageElem.style.left = `${x}px`;
    messageElem.style.top = `${y}px`;

    document.body.appendChild(messageElem);
    setTimeout(() => messageElem.remove(), 2500);

    currentMessageIndex++;
  }
});
