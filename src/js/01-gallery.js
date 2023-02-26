import { galleryItems, createGalleryItem } from "./gallery-items.js";
const galleryMarkup = galleryItems.map(createGalleryItem).join("");
// Change code below this line
import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

const galleryList = document.querySelector(".gallery");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isGalleryItem = event.target.classList.contains("gallery__image");
  if (!isGalleryItem) {
    return;
  }

  const imageUrl = onGalleryClick.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${preview}" width="800" height="600">
  `);

  instance.show();
}
console.log(galleryItems);
