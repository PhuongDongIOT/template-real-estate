gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, // tốc độ mượt (1 = bình thường, >1 = chậm mượt hơn)
    effects: true // cho phép các hiệu ứng parallax
});
