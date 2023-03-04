import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`,
    )
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems),
);

function showLargeImage(evt) {
  evt.preventDefault();
  if (evt.target.tagName !== 'IMG') return;
  const fullSizeImageSource = evt.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${fullSizeImageSource}">`);
  instance.show();

  document.addEventListener('keydown', onEscapePress);

  function onEscapePress(event) {
    if (event.code !== 'Escape') return;

    instance.close();
    document.removeEventListener('keydown', onEscapePress);
  }
}

galleryContainer.addEventListener('click', showLargeImage);
