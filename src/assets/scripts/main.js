const navButton = document.querySelector("#header_menu");
const navMenu = document.querySelector("#navMoblie");
const overlay = document.querySelector(".overlay");
const cards = document.querySelectorAll(".hide");
const body1 = document.querySelector("body");

const openNav = () => {
    navButton.classList.toggle("active");
    navMenu.classList.toggle("show");
    overlay.classList.toggle("show");
    body1.classList.toggle("fixed");
    document.body.scrollTop = document.body.scrollTop;
    console.log(document.body.scrollTop);
};

navButton.addEventListener("click", openNav);

const clickOut = () => {
    if (overlay.classList.contains("show")) {
        overlay.classList.remove("show");
        navButton.classList.toggle("active");
        navMenu.classList.toggle("show");
        body1.classList.toggle("fixed");
    }
};
overlay.addEventListener("click", clickOut);

const navFixed = document.querySelector("#headerMain");
const main = document.querySelector("main");

let lastKnownScrollPosition = 0;
let ticking = false;

const revealNav = (lastKnownScrollPosition) => {
    if (window.scrollY >= 100) {
        navFixed.classList.add("sticky");
    } else {
        navFixed.classList.remove("sticky");
    }
};

const revealContent = () => {
    cards.forEach((card, index) => {
        var cardTop = card.getBoundingClientRect().top + 40;
        if (cardTop <= window.innerHeight) {
            setTimeout(() => {
                card.classList.add("visible");
            }, index * 100);
        } else {
            card.classList.remove("visible");
        }
    });
};

window.addEventListener("load", revealContent);

window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    // console.log(lastKnownScrollPosition);
    if (!ticking) {
        window.requestAnimationFrame(() => {
            revealNav(lastKnownScrollPosition);
            revealContent();
            ticking = false;
        });

        ticking = true;
    }
});
