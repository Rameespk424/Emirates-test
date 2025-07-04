// Navbar fix on top


window.addEventListener('scroll', function () {
  const nav = document.querySelector('.main_nav');
  if (window.scrollY > 50) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});


// Main slider


$(document).ready(function () {
  $(".first-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>"
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      1200: { items: 4 }
    }
  });
});

// Testimponial slider


$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    navText: [
      "<i class='bi bi-arrow-left'></i>",
      "<i class='bi bi-arrow-right'></i>"
    ],
  });
});
