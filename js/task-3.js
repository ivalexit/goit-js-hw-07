const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function inputHandler(event) {
  const inputValue = event.target.value.trim();
  //   console.log(event.target.value);
  //   nameOutput.textContent = inputValue || "Anonymous";
  const displayText = inputValue === "" ? "Anonymous" : inputValue;
  nameOutput.textContent = displayText;
}

nameInput.addEventListener("input", inputHandler);