function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const divCreate = document.querySelector("#boxes");
  destroyBoxes();
  for (let i = 0; i < amount; i++){
    let newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divCreate.appendChild(newDiv);
}
};

const btnCreate = document.querySelector("button[data-create]");
const input = document.querySelector("input");
btnCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert`Введіть число в діапазоні від 1 до 100`;
  }
  input.value = "";
})
const btnDelete = document.querySelector("button[data-destroy");
btnDelete.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  const divDelete = document.querySelector("#boxes");
  divDelete.innerHTML = "";
}
