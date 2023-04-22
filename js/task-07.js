const inputRangeRef = document.querySelector(`#font-size-control`);
const inputTextRef = document.querySelector(`#text`);

const changeInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener("input", changeInput);
