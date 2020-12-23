const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger");
const nav= document.getElementById("nav");
const close=document.getElementById("close");
const logo = document.getElementById("logo");
const shadow = document.getElementById("shadow");


const showNav =() => {
    navbar.style.backgroundColor="white";
    nav.style.visibility = "visible";
    hamburger.style.visibility = "hidden";
    close.style.visibility = "visible";
    logo.style.visibility = "hidden";
    shadow.style.visibility="visible"

}
const closeNav =()=>{
    navbar.style.backgroundColor="transparent";
    nav.style.visibility ="hidden"
    hamburger.style.visibility="visible"
    close.style.visibility="hidden"
    logo.style.visibility="visible"
    shadow.style.visibility="hidden"
}

hamburger.addEventListener('click',showNav);
close.addEventListener('click',closeNav);

//slideshow

let slideIndex = 1;
showSlide(slideIndex);

function slides(n) {
    showSlides(slideIndex += n);
  }

function showSlides(n) {
    let i;
    let slider = document.getElementsByClassName("flex");
    if (n > slider.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";  
    }
    slider[slideIndex-1].style.display = "flex";  
  }