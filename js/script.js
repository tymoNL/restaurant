function toggleMobileMenu(obj) {
    const menu = document.querySelector(".mainmenu");
    menu.classList.toggle("active");

    obj.classList.toggle("active");
    obj.children[0].classList.toggle("fa-bars");
    obj.children[0].classList.toggle("fa-xmark");
}

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });