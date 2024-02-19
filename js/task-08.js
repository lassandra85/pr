const loginForm = document.querySelector(".login-form");
console.dir(loginForm);

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const { email, password } = form.elements;

  console.log(email.value);

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

/* Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */
