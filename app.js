const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

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

    document.getElementById("typewriter").textContent = currentText;

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
const boxes = document.querySelectorAll(".service-box");

boxes.forEach(box => {
    const header = box.querySelector(".service-header");

    header.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});
const logoSection = document.getElementById("logoSection");

window.addEventListener("scroll", () => {
    const rect = logoSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (isVisible) {

        logoSection.classList.remove("opacity-0", "-translate-x-20");
        logoSection.classList.add("opacity-100", "translate-x-0");
    } else {
        logoSection.classList.add("opacity-0", "-translate-x-20");
        logoSection.classList.remove("opacity-100", "translate-x-0");
    }
});
const textBox = document.getElementById("textBox");

window.addEventListener("scroll", () => {
    const rect = textBox.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 100;

    if (visible) {
        textBox.classList.remove("opacity-0", "translate-y-10");
        textBox.classList.add("opacity-100", "translate-y-0");
    } else {
        textBox.classList.add("opacity-0", "translate-y-10");
        textBox.classList.remove("opacity-100", "translate-y-0");
    }
});
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

window.addEventListener("scroll", () => {
    const point = img1.getBoundingClientRect().top;
    const visible = point < window.innerHeight - 120;

    if (visible) {
        img1.classList.remove("opacity-0", "-translate-x-10");
        img1.classList.add("opacity-100", "translate-x-0");
        img2.classList.remove("opacity-0", "translate-x-10");
        img2.classList.add("opacity-100", "translate-x-0");
        img3.classList.remove("opacity-0", "translate-y-10", "-translate-x-5");
        img3.classList.add("opacity-100", "translate-y-0", "translate-x-0");
        img4.classList.remove("opacity-0", "translate-y-10", "translate-x-5");
        img4.classList.add("opacity-100", "translate-y-0", "translate-x-0");

    } else {
        img1.classList.add("opacity-0", "-translate-x-10");
        img2.classList.add("opacity-0", "translate-x-10");
        img3.classList.add("opacity-0", "translate-y-10", "-translate-x-5");
        img4.classList.add("opacity-0", "translate-y-10", "translate-x-5");
    }
});

