import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);




// Знайшли гелері
const galleryEl = document.querySelector('.gallery');

// Окрема картинка null?
const imgEl = document.querySelector('img');



// Створюємо одну картинку

function createImgEl ({preview, original, description}) {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
};

// Перебираємо масив об'єктів

const galleryMarkupEl = galleryItems.map(img => createImgEl(img)).join('');


galleryEl.insertAdjacentHTML("afterbegin", galleryMarkupEl);


let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250 });
