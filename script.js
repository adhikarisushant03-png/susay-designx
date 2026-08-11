// ============================
// CUSTOM CURSOR
// ============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ============================
// SCROLL REVEAL
// ============================

const reveals = document.querySelectorAll(
    ".reveal, .card, .gallery img, .portrait-gallery img, .landscape-gallery img"
);

reveals.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "1s ease";

});


function revealOnScroll() {

    reveals.forEach((element) => {

        const position = element.getBoundingClientRect().top;
        const screen = window.innerHeight - 100;

        if (position < screen) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ============================
// HERO MOUSE PARALLAX
// ============================

const hero = document.querySelector(".hero-content");

document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});


// ============================
// NAVBAR EFFECT
// ============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.85)";

    } else {

        nav.style.background = "rgba(0,0,0,.45)";

    }

});


// ============================
// IMAGE CLICK EFFECT
// ============================

const images = document.querySelectorAll(
    ".gallery img, .portrait-gallery img, .landscape-gallery img"
);

images.forEach((image) => {

    image.addEventListener("click", () => {

        window.open(image.src, "_blank");

    });

});
