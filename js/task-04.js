// // Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать
// // его значение на единицу.

// // <div id="counter">
// //   <button type="button" data-action="decrement">-1</button>
// //   <span id="value">0</span>
// //   <button type="button" data-action="increment">+1</button>
// // </div>
// // Создай переменную counterValue в которой будет храниться текущее значение счетчика и
// // инициализируй её значением 0.
// // Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение
// // счтетчика.
// // Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const counterDecrement = () => counterValue -= 1;
const counterIncrement = () => counterValue += 1;


const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', function () {
    
    counterDecrement();
    valueEl.textContent = counterValue;
})


incrementBtnEl.addEventListener('click', function () {
    
    counterIncrement();
    valueEl.textContent = counterValue;
})

console.log(decrementBtnEl);
console.log(incrementBtnEl);
console.log(valueEl);


// const decrementBtnEl = document.querySelector('[data-action="decrement"]');
// const incrementBtnEl = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');

// const counterValue = {
//     value: 0,

//     increment() {
//         this.value += 1;
//     },

//     decrement() {
//         this.value -= 1;
//     },
// }

// decrementBtnEl.addEventListener('click', function () {
    
//     counterValue.decrement();
//     valueEl.textContent = counterValue.value;
// }) 


// incrementBtnEl.addEventListener('click', function () {
    
//     counterValue.increment();
//     valueEl.textContent = counterValue.value;
// }) 