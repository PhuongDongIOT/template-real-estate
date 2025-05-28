document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".gsap-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".gsap-heading",
            start: "top 80%",
        },
    });

    gsap.from(".gsap-subheading", {
        y: 50,
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".gsap-subheading",
            start: "top 85%",
        },
    });

    gsap.from(".gsap-text", {
        y: 30,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gsap-text",
            start: "top 90%",
        },
    });

    gsap.from(".gsap-img", {
        x: (i) => i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gsap-img",
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
        stagger: 0.2
    });
});
