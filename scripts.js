$(document).ready(function () {
    let carouselIndex = 0;
    const carouselImages = $(".carousel-image");

    function changeCarouselImage() {
        carouselImages.eq(carouselIndex).css("display", "none");
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages.eq(carouselIndex).css("display", "block");
    }

    setInterval(changeCarouselImage, 5000); // Change image every 5 seconds
});
