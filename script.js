const body = document.body;
const preloader = document.querySelector(".preloader");
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-counter]");
const sections = document.querySelectorAll("main section[id]");
const carousel = document.querySelector(".area-carousel");

let lastScrollY = window.scrollY;

body.classList.add("loading");

function updateHeader() {
    const currentScroll = window.scrollY;
    header.classList.toggle("scrolled", currentScroll > 18);
    header.classList.toggle("hidden", currentScroll > lastScrollY && currentScroll > 560);
    lastScrollY = currentScroll;
}

function closeMenu() {
    body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
}

function animateCounter(counter) {
    if (counter.dataset.animated === "true") {
        return;
    }

    counter.dataset.animated = "true";

    const target = Number(counter.dataset.counter);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased).toLocaleString("pt-BR");

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}

menuButton.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.14,
        rootMargin: "0px 0px -70px 0px",
    }
);

revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 42, 220)}ms`;
    revealObserver.observe(item);
});

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

            if (entry.isIntersecting && link) {
                navLinks.forEach((item) => item.classList.remove("active"));
                link.classList.add("active");
            }
        });
    },
    { threshold: 0.42 }
);

sections.forEach((section) => sectionObserver.observe(section));

if (carousel) {
    const track = carousel.querySelector(".area-track");
    const cards = Array.from(carousel.querySelectorAll(".area-row"));
    const prev = carousel.querySelector(".carousel-prev");
    const next = carousel.querySelector(".carousel-next");
    const dots = carousel.querySelector(".carousel-dots");
    let scrollPositions = [];

    function createDots() {
        const maxScroll = Math.max(track.scrollWidth - track.clientWidth, 0);
        scrollPositions = cards
            .map((card) => card.offsetLeft)
            .filter((position) => position <= maxScroll + 8)
            .filter((position, index, list) => index === 0 || Math.abs(position - list[index - 1]) > 8);

        dots.innerHTML = "";

        scrollPositions.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Ir para posição ${index + 1} do carrossel`);
            dot.addEventListener("click", () => {
                track.scrollTo({ left: scrollPositions[index], behavior: "smooth" });
            });
            dots.appendChild(dot);
        });

        updateDots();
    }

    function updateDots() {
        const dotButtons = Array.from(dots.querySelectorAll("button"));
        const currentIndex = scrollPositions.reduce((closest, position, index) => {
            const distance = Math.abs(track.scrollLeft - position);
            return distance < closest.distance ? { index, distance } : closest;
        }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;

        dotButtons.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function scrollByCard(direction) {
        const currentIndex = scrollPositions.reduce((closest, position, index) => {
            const distance = Math.abs(track.scrollLeft - position);
            return distance < closest.distance ? { index, distance } : closest;
        }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
        const nextIndex = Math.min(Math.max(currentIndex + direction, 0), scrollPositions.length - 1);
        track.scrollTo({ left: scrollPositions[nextIndex], behavior: "smooth" });
    }

    prev.addEventListener("click", () => scrollByCard(-1));
    next.addEventListener("click", () => scrollByCard(1));
    track.addEventListener("scroll", updateDots, { passive: true });
    window.addEventListener("resize", createDots);
    createDots();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

window.addEventListener("scroll", updateHeader, { passive: true });

window.addEventListener("load", () => {
    updateHeader();

    setTimeout(() => {
        preloader.classList.add("hidden");
        body.classList.remove("loading");
    }, 520);

    setTimeout(() => {
        counters.forEach((counter) => {
            if (counter.textContent.trim() === "0") {
                animateCounter(counter);
            }
        });
    }, 1200);
});
