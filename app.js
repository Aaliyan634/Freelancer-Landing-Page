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
        // Text poora type ho gaya, 1 second wait karo aur delete karna shuru karo
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 1000);
        return;
    } else if (isDeleting && j === 0) {
        // Text poora delete ho gaya, agli line par jao
        isDeleting = false;
        i = (i + 1) % texts.length;
    }

    // Speed set karo (deleting mein tez, typing mein normal)
    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();

// --- 3. FAQ ACCORDION LOGIC (FIXED) ---
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    const content = item.querySelector(".faq-content");
    // Arrow element ko target karo
    const arrowImage = item.querySelector(".arrow img");

    header.addEventListener("click", () => {
        const isContentHidden = content.classList.contains("hidden");

        // 1. Current item ko toggle karo
        content.classList.toggle("hidden");
        
        // 2. Arrow ko rotate karo (0 degree jab hidden ho, 180 degree jab visible ho)
        arrowImage.style.transform = isContentHidden ? 'rotate(180deg)' : 'rotate(0deg)';

        // 3. Doosre saare open items ko band karo (Cleanup)
        faqItems.forEach(otherItem => {
            const otherContent = otherItem.querySelector(".faq-content");
            const otherArrow = otherItem.querySelector(".arrow img");
            
            if (otherItem !== item && !otherContent.classList.contains("hidden")) {
                otherContent.classList.add("hidden");
                otherArrow.style.transform = 'rotate(0deg)';
            }
        });
    });
});


// --- 4. SCROLL ANIMATIONS (OPTIMIZED using Intersection Observer) ---

// Saare elements jin ko animate karna hai, unko yahan query karo.
const animatedElements = document.querySelectorAll('#logoSection, #textBox, #img1, #img2, #img3, #img4');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element screen par aa gaya hai (Visible)
            entry.target.classList.remove(
                "opacity-0", 
                "-translate-x-20", 
                "translate-y-10", 
                "-translate-x-10", 
                "translate-x-10", 
                "-translate-x-5", 
                "translate-x-5"
            );
            entry.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
            
            // Jab animation ho jaye, toh is element ko observe karna band kar do
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Jab element ka 10% dikh jaye tab trigger karo
});

animatedElements.forEach(element => {
    observer.observe(element);
});