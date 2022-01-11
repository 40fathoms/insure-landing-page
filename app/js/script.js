const body = document.querySelector(".body");
const hamburger = document.querySelector(".navbar_hamburger");
const close = document.querySelector(".navbar_close");
const navbarMobile = document.querySelector(".navbar_links_mobile");


//Adding functionality to the hamburger button, adding or removing the "active" class;
function menuFunctionality(){
    if (hamburger.classList.contains("active")){
        body.classList.remove("active");
        hamburger.classList.remove("active");
        close.classList.remove("active");
        navbarMobile.classList.remove("active")
    }
    else{
        body.classList.add("active");
        hamburger.classList.add("active");
        close.classList.add("active");
        navbarMobile.classList.add("active")
    }
}

//Calling the menuFunctionality function
hamburger.addEventListener("click", menuFunctionality)
close.addEventListener("click", menuFunctionality)