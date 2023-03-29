import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  container: document.querySelector(`.gallery`),
};

const imgMarkup = createImgMarkup(galleryItems);

let instance = basicLightbox.create(`
    <img class="gallery__image" src= '', width="800" height="600">
`);

refs.container.insertAdjacentHTML(`beforeend`, imgMarkup);

refs.container.addEventListener(`click`, handleImgClick);

function createImgMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
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
    .join(``);
}

function handleImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }

  const imageMarkUp = `
    <img class="gallery__image" src= '${event.target.dataset.source}', width="800" height="600">
`;
  console.log(imageMarkUp);
  instance = basicLightbox.create(imageMarkUp, {
    onShow: (instance) => window.addEventListener(`keydown`, handleEsc),
    onClose: (instance) => window.removeEventListener(`keydown`, handleEsc),
  });
  instance.show();

  // window.addEventListener(`keydown`, handleEsc);
}

function handleEsc(event) {
  console.log(event);
  if (!(event.code === `Escape`)) {
    return;
  }
  instance.close();
  // window.removeEventListener(`keydown`, handleEsc);
}