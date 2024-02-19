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

/* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

Для генерации случайного цвета используй функцию getRandomHexColor.
*/

/* background-color: #fafafa; */
