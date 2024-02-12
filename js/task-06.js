const textInput = document.querySelector("#validation-input");

const inputChange = textInput.addEventListener("change", inputValue);

function inputValue(e) {
  if (e.current.value.length >= textInput.data - set.length) {
    textInput.id = validation - input.valid;
  } else {
    textInput.id = validation - input.invalid;
  }
  /*   if (e.currentTarget.value.length >= .data - set.length) {
    
  } */
}
