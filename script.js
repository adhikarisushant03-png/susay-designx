// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});





// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal, .card, .project, .process div");


window.addEventListener("scroll", ()=>{


reveals.forEach((element)=>{


let position = element.getBoundingClientRect().top;

let screen = window.innerHeight - 100;


if(position < screen){

element.style.opacity="1";
element.style.transform="translateY(0)";

}


});


});






// INITIAL ANIMATION STYLE

reveals.forEach((element)=>{

element.style.opacity="0";
element.style.transform="translateY(50px)";
element.style.transition="1s ease";

});






// HERO MOUSE PARALLAX

const hero = document.querySelector(".hero-content");


document.addEventListener("mousemove",(e)=>{


let x = (window.innerWidth/2 - e.clientX)/40;

let y = (window.innerHeight/2 - e.clientY)/40;


hero.style.transform =
`translate(${x}px,${y}px)`;


});







// NAVBAR EFFECT

window.addEventListener("scroll",()=>{


const nav=document.querySelector("nav");


if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.85)";

}
else{

nav.style.background="rgba(0,0,0,.4)";

}


});
