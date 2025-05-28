
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in table container
    gsap.from(".table-container", {
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
    });

    // Zoom + rotate nhẹ chữ tiêu đề
    gsap.from(".title-rotate", {
        scrollTrigger: {
            trigger: ".project-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
        scale: 0.8,
        rotation: 10,
        opacity: 0,
        duration: 1.4,
        ease: "back.out(1.7)"
    });
});

