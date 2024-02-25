function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = document.querySelector("span.color")
const btn = document.querySelector("button.change-color");
 btn.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  color.textContent = changeColor;
  document.body.style.backgroundColor = changeColor;
  
});

