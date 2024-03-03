import { galleryItems } from "./gallery-items.js";
// Change code below this line

/* console.dir(galleryItems); */

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href = ${original}>
    <img
      class = "gallery__image"
      src = ${preview}
      data-source = ${original}
      alt = ${description}
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
/* console.dir(gallery); */

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

gallery.addEventListener("click", itemShow);

function itemShow(evt) {
  evt.preventDefault();
  const item = evt.target;
}

/* instance.show(); */

/* console.log(instance); */
