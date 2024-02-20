const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const onClickbuttonDecrement = buttonDecrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const onClickbuttonIncrement = buttonIncrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
