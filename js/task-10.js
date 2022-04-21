// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество 
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При 
// нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число.Функция 
// создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.Используй готовую функцию 
// getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя 
// все созданные элементы.



const boxesEl = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputControl = document.querySelector('#controls').firstElementChild;




console.log(boxesEl);
console.log(btnCreate);
console.log(btnDestroy);
console.log(inputControl);

btnCreate.addEventListener('click', (createBoxes));
btnDestroy.addEventListener('click', (destroyBoxes));
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = getRandomHexColor();
const container = document.createElement('div');
let widthBox = 30;




function createBoxes(amount) {
   amount = inputControl.value;
  let divForCreate ;
  
  container.style.display = 'flex';
 

  for (let i = 0; i < amount; i += 1) {
    
    const randomColor = getRandomHexColor();
    divForCreate = document.createElement('div');
    divForCreate.style.backgroundColor = randomColor;
    divForCreate.style.width = `${widthBox}px`;
    divForCreate.style.height = `${widthBox}px`;
    container.append(divForCreate);
    widthBox += 10;
  }

  boxesEl.append(container);
console.log('Oops,I have clicked CREATE');
  console.dir(container);
}


function destroyBoxes() {
  inputControl.value = '';
  container.innerHTML = '';
  console.log('Oops,I have  DESTROYed');
}