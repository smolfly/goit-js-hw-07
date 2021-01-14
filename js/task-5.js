// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");
console.dir(inputRef);
const outputRef = document.querySelector("#name-output");
console.dir(outputRef);
inputRef.addEventListener('input', event =>
{
    let nameRef = event.target.value;
    if (nameRef === "") {
        outputRef.textContent = 'незнакомец';
    }
    else {
        outputRef.textContent = nameRef;
    }
});