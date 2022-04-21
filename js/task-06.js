// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое
// на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// ============================================

const inputEl = document.querySelector('input');

inputEl.addEventListener("blur", (setInputLength));

function setInputLength() { 

    
    const currentLength = inputEl.value.length;  //Number
    const datasetLength = parseInt(inputEl.dataset.length);

    currentLength === datasetLength ?
        inputEl.className = 'valid' :
        inputEl.className = 'invalid';
    
    console.log(current);
    console.log(currentLength);
    console.log(datasetLength);                    //6
    console.log(currentLength === datasetLength);
    console.log("This is blur");

};

// =================================== 
