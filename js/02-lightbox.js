import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector(`.gallery`),
};

const imgMarkup = createImgMarkup(galleryItems);

refs.container.insertAdjacentHTML(`beforeend`, imgMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});

// refs.container.addEventListener(`click`, handleImgClick);

function createImgMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join(``);
}

// function handleImgClick(event) {
//   event.preventDefault();
// }