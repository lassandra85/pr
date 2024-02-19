const loginForm = document.querySelector(".login-form");
console.dir(loginForm);

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  console.log(email.value);
  console.log(password.value);

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const formValue = {
    email: email.value,
    password: password.value,
  };
  console.table(formValue);

  form.reset();
}
