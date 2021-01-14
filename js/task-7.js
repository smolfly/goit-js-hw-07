// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text 
// обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");


fontRef.addEventListener("input", (event) => {
    textRef.style.fontSize = `${event.target.value}px`;
    console.log(event.target.value)
}
);
 