const navSlide = () => {
    const burguer = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navClose = document.querySelectorAll('.nav-anchor')

    burguer.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

    })

    for (i = 0; i < navClose.length; i++) {
    navClose[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
}

navSlide()


//=====================Back to Top button============================//
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
function BackToTop(){
  window.scroll(0, 0);
}

//=====================End Back to Top button============================//