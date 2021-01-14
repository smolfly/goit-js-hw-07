
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const counterEl = document.querySelector("#counter");
console.log(counterEl);
const valueEl = document.querySelector("#value");
console.log(valueEl);
let counterValue = Number(valueEl.textContent);
console.log(counterValue);
const decrementBtn = document.querySelector("[data-action=decrement]");
console.log(decrementBtn);
const incrementBtn = document.querySelector("[data-action=increment]");
console.log(incrementBtn);
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;

});