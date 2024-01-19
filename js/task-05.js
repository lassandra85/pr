/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const ref = {
    inputText: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

const changeName = (e) => {
    if (ref.inputText.textContent === '') {
        ref.nameOutput.textContent = 'Anonymous';
    } else { }
    /* e.preventDefault(); */
    /* console.log("input") */
};

ref.inputText.addEventListener('input', changeName);


