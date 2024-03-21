
function showServiceLeft(){
    const leftImagesCarrusel = document.getElementById("left-images-carrusel");
    const childsLeftImagesCarrusel = leftImagesCarrusel.querySelectorAll("div");
    const rightCarrusel = document.getElementById("right-carrusel");
    const childsRightCarrusel = rightCarrusel.querySelectorAll("div");

    let i = 0,j=1,n = childsLeftImagesCarrusel.length;
    for(;i < n;i++){
        const listClass = Array.from(childsLeftImagesCarrusel[i].classList);
        if(!listClass.includes("d-none")){
            j = i-1;
            if(j === -1){j = n-1}
            break;
        }
    }
    childsLeftImagesCarrusel[i].classList.toggle("d-none");
    childsLeftImagesCarrusel[j].classList.toggle("d-none");
    childsRightCarrusel[i].classList.toggle("d-none");
    childsRightCarrusel[j].classList.toggle("d-none");

}

function showServiceRight(){
    const leftImagesCarrusel = document.getElementById("left-images-carrusel");
    const childsLeftImagesCarrusel = leftImagesCarrusel.querySelectorAll("div");
    const rightCarrusel = document.getElementById("right-carrusel");
    const childsRightCarrusel = rightCarrusel.querySelectorAll("div");

    let i = 0,j=1,n = childsLeftImagesCarrusel.length;
    for(;i < n;i++){
        const listClass = Array.from(childsLeftImagesCarrusel[i].classList);
        if(!listClass.includes("d-none")){
            j = i+1;
            if(j === n){j = 0}
            break;
        }
    }
    childsLeftImagesCarrusel[i].classList.toggle("d-none");
    childsLeftImagesCarrusel[j].classList.toggle("d-none");
    childsRightCarrusel[i].classList.toggle("d-none");
    childsRightCarrusel[j].classList.toggle("d-none");
}