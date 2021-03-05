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