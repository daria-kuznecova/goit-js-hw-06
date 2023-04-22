const totalCount = document.getElementById("value");

let counterValue = 0;

totalCount.innerHTML = counterValue;

const decrement = () => {
  counterValue -= 1;
  totalCount.innerHTML = counterValue;
};
const increment = () => {
  counterValue += 1;
  totalCount.innerHTML = counterValue;
};

const buttonDecrement = document.querySelector(
  `#counter button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `#counter button[data-action="increment"]`
);

buttonDecrement.addEventListener("click", decrement);
buttonIncrement.addEventListener("click", increment);
