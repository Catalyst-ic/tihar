const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "&times;";
    }
    else{
        menuToggle.innerHTML = "&#9776;";
    }
});

const navItems = document.querySelectorAll(".nav-links");

navItems.forEach((item) => {
    item.addEventListener("click",() => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "&#9776;";
    })
})

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 50){
    navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
})