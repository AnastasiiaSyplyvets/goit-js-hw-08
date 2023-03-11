
// Импортировали Lodash
import throttle from 'lodash.throttle';

// Нашли форму
const formEl = document.querySelector('.feedback-form');

// Нашли имейл инпут
const emailContentEl = document.querySelector('input');

// Нашли поле для месседжа

const messageContentEl = document.querySelector('textarea');


// Ключ хранилища

const STORAGE_KEY = 'feedback-form-state';

// Обьект храниния данных для хранилища
const dataObj =  {};


getLocalStrData();

// Функция частоты ввода сообщения
messageContentEl.addEventListener('input', throttle(handleMessageContent, 500));

function handleMessageContent(event) {

  const messageValue = event.target.value;


  localStorage.setItem(STORAGE_KEY, messageValue);
}



// Достаем данные з хранилища

function getLocalStrData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));


   if(savedData) {

    messageContentEl.textContent = savedData.message || '';
    emailContentEl.value = savedData.email || '';
    
   }

//    console.log(messageContentEl.textContent)
//    console.log(emailContentEl.value)

}

// Делегируем событие на форму

formEl.addEventListener('input', event => {
   

    dataObj[event.target.name] = event.target.value;

    console.log(dataObj)

    const savedName = localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));

    

    // console.log(dataObj[event.target.name])
})

// отправка форми

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
    
}
