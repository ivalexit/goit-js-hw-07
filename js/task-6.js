function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const boxCountInput = document.querySelector("#controls input");

createBtn.addEventListener("click", () => {
  const amount = Number(boxCountInput.value.trim());

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxCountInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = "";
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
