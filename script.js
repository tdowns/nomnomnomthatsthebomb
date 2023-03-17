$(document).ready(function () {
    let carouselIndex = 0;
    const carouselImages = $(".carousel-image");

    function changeCarouselImage() {
        carouselImages.eq(carouselIndex).fadeOut(1000);
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages.eq(carouselIndex).fadeIn(1000);
    }

    setInterval(changeCarouselImage, 5000); // Change image every 5 seconds
});
