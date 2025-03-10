function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const changeColorButton = widget.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});