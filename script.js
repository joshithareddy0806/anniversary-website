let currentIndex = 0;
let slideshowInterval;

const images = [
    "images/photo1.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo9.jpg",
    "images/photo8.jpg",
    "images/photo10.jpg",
    "images/photo12.jpg",
    "images/photo14.jpg",
    "images/photo15.jpg",
    "images/photo16.jpg",
    "images/photo17.jpg",
    "images/photo18.jpg",
    "images/photo19.jpg",
    "images/photo20.jpg",
    "images/photo21.jpg"
];

const texts = [
    "Forever begins here 💕",
    "Love that only grows stronger ✨",
    "Smiles that say everything 😊",
    "Partners in every moment 🤍",
    "Through all seasons together 🌸",
    "Still holding hands 🫶",
    "A lifetime of memories 📸",
    "Home is you 🏡",
    "Always choosing each other 💍",
    "Built on trust and love 🌷",
    "Together is our favorite place 💞",
    "Where love feels safe 🤍",
    "Years pass, love remains ✨",
    "Smiling through it all 😊",
    "Every picture tells a story 📖",
    "A bond unbreakable 💪",
    "Forever grateful for you both 🌹"
];

const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const music = document.getElementById("bgMusic");
const envelope = document.getElementById("envelope");

function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex++;

        if (currentIndex >= images.length) {
            stopSlideshow();
            return;
        }

        slideImage.style.opacity = 0;

        setTimeout(() => {
            slideImage.src = images[currentIndex];
            slideText.textContent = texts[currentIndex];
            slideImage.style.opacity = 1;
        }, 500);

    }, 4000);
}

function startJourney() {
    // Show slideshow
    document.getElementById("slideshowSection").style.display = "block";

    // Scroll to slideshow
    document.getElementById("slideshowSection").scrollIntoView({
        behavior: "smooth"
    });

    // Start music + slideshow
    playMusic();
}


function stopSlideshow() {
    clearInterval(slideshowInterval);
    music.pause();
    music.currentTime = 0;

    envelope.style.display = "block";

    envelope.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function playMusic() {
    music.play();
    startSlideshow();
}

function openLetter() {
    const envelopeBox = document.getElementById("envelope");
    envelopeBox.classList.add("open");

    const letterText = document.getElementById("letterText");
    typeWriterEffect(letterText);
}

function typeWriterEffect(element, speed = 35) {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}


