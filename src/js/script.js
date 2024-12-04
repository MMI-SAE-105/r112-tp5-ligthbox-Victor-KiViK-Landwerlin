// *** LIGHTBOX ***
const lb = document.querySelector("#lightbox");
const images = document.querySelectorAll("[data-full-img]");


images.forEach(image => {
    image.addEventListener("click", function() {
        const fullImg = image.dataset.fullImg;
        const i = lb.querySelector("img");
        i.src = fullImg;
        lb.showModal();
    });
});

lb.addEventListener("click", function() {
    lb.close();
});