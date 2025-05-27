gsap.registerPlugin(ScrollTrigger);

// Scroll ngang cho section
let sections = gsap.utils.toArray(".panel");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".horizontal-section").offsetWidth
    }
});

// Hiệu ứng xuất hiện cho chữ khi scroll tới panel
gsap.utils.toArray(".animate-image").forEach((text, i) => {
    gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            containerAnimation: ScrollTrigger.getById("scrollX"), // nếu dùng container animation
            start: "left center",
            toggleActions: "play none none reverse"
        }
    });
});
