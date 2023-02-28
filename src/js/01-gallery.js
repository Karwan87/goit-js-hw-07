import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}"><img src="${item.preview}"  class="gallery__image" alt="${item.description}" data-source="${item.original}"></img></a>`
  )
  .join("");
gallery.innerHTML = galleryItem;

document.querySelectorAll(".gallery__image").forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const instance = basicLightbox.create(`
        <img width="1400" height="900" src="${event.target.dataset.source}">
      `);
    instance.show();
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        instance.close();
      }
    });
  });
});

console.log(galleryItems);
