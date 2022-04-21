// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей 
// в обьект, где имя поля будет именем свойства, а значение поля - значением 
// свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы 
// методом reset.



const loginFormEl = document.querySelector('.login-form');


loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
    
 const formData = {
        email,
        password
 } 
    console.log(formData);

    const alert = document.createElement('p');
    alert.className = 'error';
  
    if (!email.value ) {
        
      const msg =  alert.textContent = `Alert! Please, fill the email`;
        console.log(msg);
        return    email. after( alert.textContent );
        
    } else if (!password.value) {
       const msg = alert.textContent = `Alert! Please, fill the password`;
       console.log(msg); 
       return  password. after( alert.textContent);
    } else {
        
 console.log(`Email:${email.value}, password:${password.value}`);
    console.log('some has submitted');
    }
    
    
    event.currentTarget.reset();
});


