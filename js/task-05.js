const ref = {
  inputText: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const changeName = (e) => {
  if (ref.inputText.value === "") {
    ref.nameOutput.textContent = "Anonymous";
  } else {
    ref.nameOutput.textContent = e.currentTarget.value;
  }
};

ref.inputText.addEventListener("input", changeName);
