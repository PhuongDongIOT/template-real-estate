console.clear();

const slides = gsap.utils.toArray(".section.horizontal .slide");
const slideOverlay = document.querySelector(".section.horizontal .overlay");

const init = () => {
    gsap.set(slideOverlay, { y: window.innerHeight });
};
gsap
    .timeline({
        scrollTrigger: {
            trigger: ".horizontal",
            start: "top top",
            end: "+=" + (slides.length + 1) * 100 + "%",
            scrub: true,
            pin: true,
            markers: true
        }
    })
    .to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        duration: 1
    })
    .to(slideOverlay, {
        y: 0,
        ease: "none",
        duration: 1 / slides.length
    });

init();

window.addEventListener("resize", init);

