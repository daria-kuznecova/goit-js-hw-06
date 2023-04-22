const input = document.querySelector("#validation-input");
const inpLength = +input.dataset.length;

input.addEventListener(`blur`, checkInputSymbols);

function checkInputSymbols(event) {
  const inpEnterLength = event.target.value.trim().length;
  if (inpEnterLength === inpLength) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  } else {
    input.classList.remove("valid");
    input.classList.add(`invalid`);
  }
}
