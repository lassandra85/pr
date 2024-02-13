const textInput = document.querySelector("#validation-input");

const inputChange = textInput.addEventListener("blur", inputValue);

function inputValue(e) {
  if (textInput.value.length >= textInput.data - set.length) {
    textInput.id = validation - input.valid;
  } else {
    textInput.id = validation - input.invalid;
  }
}
