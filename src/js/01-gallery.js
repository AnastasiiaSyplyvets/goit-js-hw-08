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



// Вішаємо слухача на галерею


galleryEl.addEventListener("click", (event) => {
    event.preventDefault();
if(event.target.nodeName !== "IMG") {
return
}


// const instance = basicLightbox.create(
// 	` <img src="${event.target.dataset.source}" width="800" height="600">`
// )
// instance.show();


// ESC

window.addEventListener('keydown', onEscKeyDown);

function onEscKeyDown(event) {
  
  if(event.code === 'Escape') {
    // instance.close();
    closed.simplelightbox;
  }
 
};

});

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// Do something…
});