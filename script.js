
function typewriter(textElement, text, speed) {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index === text.length) {
      clearInterval(intervalId);
      return;
    }
    textElement.textContent += text[index];
    index++;
  }, speed);
}

const h1 = document.querySelector("h1");
const text = "Everyday Elegance";
const speed = 150; // Adjust speed in milliseconds

typewriter(h1, text, speed);