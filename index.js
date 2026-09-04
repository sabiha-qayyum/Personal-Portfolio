

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML =
        '<i class="fas fa-times"></i>';
    }else{
        menuToggle.innerHTML =
        '<i class="fas fa-bars"></i>';
    }

});

