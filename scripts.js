$(document).ready(function () {
    let carouselIndex = 0;
    const carouselImages = $(".carousel-image");

    function changeCarouselImage() {
        carouselImages.eq(carouselIndex).fadeOut(1000);
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages.eq(carouselIndex).fadeIn(1000);
    }

    setInterval(changeCarouselImage, 3000); // Change image every 3 seconds
});

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    let activeLink;

    switch (currentPage) {
        case 'index.html':
            activeLink = 'home-link';
            break;
        case 'poetry.html':
            activeLink = 'poetry-link';
            break;
        case 'recipes.html':
            activeLink = 'recipes-link';
            break;
        case 'food-diary.html':
            activeLink = 'food-diary-link';
            break;
        default:
            activeLink = 'home-link';
    }

    document.getElementById(activeLink).textContent += " 🍴";
}

// Call the function to update the active navigation link
updateActiveNavLink();
