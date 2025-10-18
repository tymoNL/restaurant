function toggleMobileMenu(obj) {
    const menu = document.querySelector(".mainmenu");
    menu.classList.toggle("active");

    obj.classList.toggle("active");
    obj.children[0].classList.toggle("fa-bars");
    obj.children[0].classList.toggle("fa-xmark");
}