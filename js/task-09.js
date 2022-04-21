// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике 
// на button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


const bodyEl = document.querySelector('body');
const spanColorEl = document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');
const styleEl = document.querySelector('style');

console.log(bodyEl);
console.log(spanColorEl);
console.log(btnChangeColorEl);
console.log(styleEl);


btnChangeColorEl.addEventListener('click', (getChangeColor));


function getChangeColor() {

  const randomColor = getRandomHexColor();


  spanColorEl.innerHTML = `${randomColor}`;
  styleEl.insertAdjacentHTML('beforeend', `body {background-color:${randomColor}};` )
  
  
  console.log(randomColor);
  console.log('Who has clicked?')
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


