

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    const aboutSection =
        document.querySelector("#about");

    const position =
        aboutSection.getBoundingClientRect();

    if (
        position.top <
        window.innerHeight * 0.8
    ) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                parseFloat(
                    counter.dataset.target
                );

            const isDecimal =
                target % 1 !== 0;

            let current = 0;

            const increment =
                target / 60;

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        isDecimal
                            ? target.toFixed(2)
                            : target;

                    return;

                }

                counter.textContent =
                    isDecimal
                        ? current.toFixed(2)
                        : Math.floor(current);

                requestAnimationFrame(
                    updateCounter
                );

            };

            updateCounter();

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


document.getElementById("year").textContent =
    new Date().getFullYear();


const heroImage =
    document.querySelector(".image-frame");


document.addEventListener("mousemove", (event) => {

    if (!heroImage) return;

    const x =
        (event.clientX / window.innerWidth) - 0.5;

    const y =
        (event.clientY / window.innerHeight) - 0.5;

    heroImage.style.transform =
        `rotateY(${x * 4}deg)
         rotateX(${y * -4}deg)`;

});

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -3;

            const rotateY =
                ((x / rect.width) - 0.5) * 3;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});
console.log(
    "%cKaleeswari S — Portfolio",
    "color:#c7a86b;font-size:18px;font-weight:bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript.",
    "color:#969daa;font-size:12px;"
);