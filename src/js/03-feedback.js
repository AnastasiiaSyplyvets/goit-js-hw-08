
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


// Достаем данные з хранилища

function getLocalStrData() {
    const savedData = localStorage.getItem(STORAGE_KEY);


   if(savedData) {

    messageContentEl.textContent = savedData.message || '';
    emailContentEl.value = savedData.email || '';
    
   }


}

// Делегируем событие на форму

formEl.addEventListener('input', throttle(handleFormInput, 1000) )

function handleFormInput(event) {
  

        dataObj[event.target.name] = event.target.value;
    
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));

 
}

// отправка форми

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    localStorage.removeItem(STORAGE_KEY);
    
}
