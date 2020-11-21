
const navbar = document.querySelector(".header");

window.addEventListener("scroll",() =>{
    const s = window.pageYOffset;
    if(s >= 450){
        navbar.classList.add("navbar-fixed")
    }else{
        navbar.classList.remove("navbar-fixed")
    }
})

// ScrollSpy

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

// onScroll Animation

const about = document.querySelector("#about");
const gallery = document.querySelector("#gallery");
const info = document.querySelector("#info");
const pricing = document.querySelector("#pricing");
const touch = document.querySelector("#touch");

window.addEventListener("scroll",() =>{
    const s = window.pageYOffset;
    if(s >= 190){
        about.classList.add("appearence");
    }
    if(s >= 700){
        gallery.classList.add("appearence");
    }
    if(s >= 1360){
        info.classList.add("appearence");
    }
    if(s >= 1830){
        pricing.classList.add("appearence");
    }
    if(s >= 2450){
        touch.classList.add("appearence");
    }
})
