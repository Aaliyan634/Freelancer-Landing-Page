// --- 1. HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// --- 2. TYPEWRITER EFFECT ---
const texts = [
    "Name Muhammad Aaliyan",
    "A Front-end Developer",
    "JavaScript Developer"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const speed = 150;

function type() {
    const fullText = texts[i];

    if (isDeleting) {
        currentText = fullText.substring(0, j - 1);
        j--;
    } else {
        currentText = fullText.substring(0, j + 1);
        j++;
    }

    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        typewriterElement.textContent = currentText;
    }

    if (!isDeleting && j === fullText.length) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1000);
        return;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();