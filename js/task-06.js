const textInput = document.querySelector("#validation-input");

const inputChange = textInput.addEventListener("blur", inputValue);

function inputValue(e) {
  if (textInput.value.length < textInput.dataset.length) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  }
}
