// Bootstrap function to initialize Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Burguer Navigation bar
// Burguer menu inspiration from: https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navClose = document.querySelectorAll('.nav-anchor')

    // Active Burguer
    burguer.addEventListener("click", () => {
        nav.classList.toggle('nav-active');
    })

    // Close burguer by clicking any of the navigation bar links
    for (i = 0; i < navClose.length; i++) {
        navClose[i].addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        });
    }
}

navSlide()

// Back to Top button 
const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
    if (window.pageYOffset > 200) { // Show backToTopButton
        backToTopButton.style.display = "block";
    }
    else { // Hide backToTopButton
        backToTopButton.style.display = "none";
    };
}
backToTopButton.addEventListener("click", BackToTop);
function BackToTop() {
    window.scroll(0, 0);
}