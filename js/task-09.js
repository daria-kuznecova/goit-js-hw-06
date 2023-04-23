function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  textColorEl.textContent = hexColor;
});
