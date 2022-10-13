// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const createListImg = galleryItems.map(({ preview, original, description }) => {
    return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
})

galleryDiv.innerHTML = createListImg.join('');


