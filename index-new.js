gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".horizontal-scroll-content");
const panels = document.querySelectorAll(".panel");
const totalWidth = container.scrollWidth;

gsap.to(container, {
    x: () => -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-scroll-wrapper",
        start: "top top",
        end: () => `+=${totalWidth - window.innerWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
    }
});
