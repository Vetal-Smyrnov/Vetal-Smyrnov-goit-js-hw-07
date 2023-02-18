import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryGrid = document.querySelector(".gallery");

const markupBox = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>`;
  })
  .join("");

galleryGrid.innerHTML = markupBox;

let lightbox = new SimpleLightbox(".gallery a", {
  Data: "alt",
  Delay: 250,
});

console.log(galleryItems);
