const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleLogin);

function handleLogin(e) {
  e.preventDefault();
  const form = e.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  /* console.log(`Login: ${login.value}, Password: ${password.value}`); */
  form.reset();
}

/* Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */
