// ===============================
// Portal RoboNex - Modul 1
// Jam, Tarikh & Ucapan Automatik
// ===============================

// ================= SOUND =================

const clickSound = new Audio("sounds/click.mp3");
clickSound.volume = 0.3;
const popupSound = new Audio("sounds/popup.mp3");
popupSound.volume = 0.4;
const robotSound = new Audio("sounds/robot.mp3");
robotSound.volume = 0.5;


function updateClock() {

    const now = new Date();

    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    const hari = [
        "Ahad",
        "Isnin",
        "Selasa",
        "Rabu",
        "Khamis",
        "Jumaat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Mac",
        "April",
        "Mei",
        "Jun",
        "Julai",
        "Ogos",
        "September",
        "Oktober",
        "November",
        "Disember"
    ];

    document.getElementById("jam").textContent =
        `${hh}:${mm}:${ss}`;

    document.getElementById("tarikh").textContent =
        `${hari[now.getDay()]}, ${now.getDate()} ${bulan[now.getMonth()]} ${now.getFullYear()}`;

    let ucapan = "";

    if (now.getHours() >= 5 && now.getHours() < 12) {

        ucapan = "🌞 Selamat Pagi";

    } else if (now.getHours() >= 12 && now.getHours() < 15) {

        ucapan = "☀️ Selamat Tengah Hari";

    } else if (now.getHours() >= 15 && now.getHours() < 19) {

        ucapan = "🌤️ Selamat Petang";

    } else {

        ucapan = "🌙 Selamat Malam";

    }

    document.getElementById("ucapan").textContent = ucapan;

}

updateClock();

setInterval(updateClock, 1000);

// ===============================
// Animasi Card
// ===============================

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition = "0.5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// ================= SLIDESHOW =================

const slides = [
    "images/2026-coding.jpg",
    "images/2026-stemfinity.jpg",
    "images/2026-nexus.jpg",
    "images/2026-robotbattlechallenge.jpg",
    "images/2025-robotbattlechallenge.jpg",
    "images/2025-sumo.jpg",
    "images/2024-stem.jpg",
    "images/2025-tvet.jpg"
];

let slideIndex = 0;

const slideshow = document.getElementById("slideshow");

function tukarSlide() {
    slideshow.src = slides[slideIndex];
    slideshow.style.opacity = 1;
}
console.log("Slideshow bermula");
tukarSlide();

setInterval(() => {

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slideshow.style.opacity = 0;

setTimeout(() => {
    slideshow.src = slides[slideIndex];
    slideshow.style.opacity = 1;
}, 300);

}, 4000);

// ================= LIGHTBOX =================

const heroImage = document.getElementById("slideshow");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

/*
heroImage.onclick = function () {
    lightbox.style.display = "flex";
    lightboxImg.src = heroImage.src;
};
*/ 

closeBtn.onclick = function () {
    lightbox.style.display = "none";
};

lightbox.onclick = function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
};

// ================= COUNTDOWN =================

const targetDate = new Date("August 22, 2026 08:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const countdown = document.getElementById("countdown");

    if (distance > 0) {
        countdown.innerHTML = "⏳ Lagi " + days + " hari";
    } else {
        countdown.innerHTML = "🚀 Sedang Berlangsung";
    }
}

updateCountdown();
setInterval(updateCountdown, 60000);

// ================= MENU SOUND =================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

function playPopupSound() {
    popupSound.currentTime = 0;
    popupSound.play();
}

function playRobotSound() {
    robotSound.currentTime = 0;
    robotSound.play();

}