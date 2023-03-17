function loadNavbar() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("navbar-placeholder").innerHTML = this.responseText;
      updateActiveNavLink();
    }
  };
  xhttp.open("GET", "navbar.html", true);
  xhttp.send();
}

// Call the function to load the navbar
loadNavbar();


$(document).ready(function () {
    let carouselIndex = 0;
    const carouselImages = $(".carousel-image");

    function changeCarouselImage() {
        carouselImages.eq(carouselIndex).fadeOut(1000);
        carouselIndex = (carouselIndex + 1) % carouselImages.length;
        carouselImages.eq(carouselIndex).fadeIn(1000);
    }

    setInterval(changeCarouselImage, 4500); // Change image every 3 seconds
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
        case 'moabs.html':
            activeLink = 'moabs-link';
            break;
        default:
            activeLink = 'home-link';
    }

    document.getElementById(activeLink).textContent += " 🍴";
}

// Call the function to update the active navigation link
updateActiveNavLink();

document.getElementById('searchInput').addEventListener('input', (event) => {
  const filter = event.target.value.toLowerCase();
  const table = document.getElementById('moabsTable');
  const rows = table.tBodies[0].rows;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    let shouldShowRow = false;

    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerText.toLowerCase().indexOf(filter) > -1) {
        shouldShowRow = true;
        break;
      }
    }

    rows[i].style.display = shouldShowRow ? '' : 'none';
  }
});
