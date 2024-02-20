const controls = document.querySelector("#controls");
console.dir(controls);

const boxes = document.querySelector("#boxes");
console.dir(boxes);

const inputNumber = document.querySelector('input[type="number"]');
console.dir(inputNumber);

const buttonCreate = document.querySelector("button[data-create");
console.dir(buttonCreate);

const buttonDestroy = document.querySelector("button[data-destroy");
console.dir(buttonDestroy);

buttonCreate.addEventListener("click", () => createBoxes(inputNumber.value));

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount >= +inputNumber.min && amount <= +inputNumber.max) {
    /*====    Варіант за методом createElement()    ====*/
    /*const boxesAmount = [];
     for (let i = 0; i < amount; i += 1) {
     
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + 10 * i}px`;
      box.style.height = `${30 + 10 * i}px`;
      boxesAmount.push(box);
     }

     boxes.append(...boxesAmount); */
    /*====    Варіант за методом insertAdjacentHTML()    ====*/

    let boxesAmount = "";

    for (let i = 0; i < amount; i += 1) {
      boxesAmount += `<div style = 
      "background-color: ${getRandomHexColor()}; 
      width: ${30 + 10 * i}px; 
      height: ${30 + 10 * i}px;">
      </div>`;
    }
    boxes.insertAdjacentHTML("afterbegin", boxesAmount);
  } else {
    alert("Please enter number in the form!");
    return;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
