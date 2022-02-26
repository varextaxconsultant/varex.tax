let hamburger = document.querySelector('.hamburger');
let navmenu = document.querySelector('.navmenu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active")
})

document.querySelectorAll("navlink").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))