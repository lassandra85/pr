const ref = {
  bodyJs: document.body,
  backgroundColorBody: document.querySelector(".widget"),
  spanColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
};

ref.btnChangeColor.addEventListener("click", changeColor);

function changeColor() {
  ref.bodyJs.style.backgroundColor = getRandomHexColor();
  ref.spanColor.textContent = ref.bodyJs.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
