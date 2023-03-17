$(document).ready(function () {
    let carouselIndex = 0;
    const carouselImages = $(".carousel-image");
    carouselImages.eq(carouselIndex).addClass("carousel-image-active");

    function changeCarouselImage() {
        carouselImages.eq(carouselIndex).removeClass("carousel-image-active");
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages.eq(carouselIndex).addClass("carousel-image-active");
    }

    setInterval(changeCarouselImage, 5000); // Change image every 5 seconds
});
