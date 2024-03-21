document.getElementById("button-left-images-carrusel").addEventListener("click",showServiceLeft);
document.getElementById("button-right-images-carrusel").addEventListener("click",showServiceRight);


function openNav(){
    navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("hide")
}