document.addEventListener("DOMContentLoaded", function () {
    const slideTexts = [
        "01 Slide 1 Thiên nhiên",
        "02 Slide 2 Thiên nhiên",
        "03 Slide 3 Thiên nhiên",
        "04 Slide 4 Thiên nhiên"
    ];

    const navItems = Array.from(document.querySelectorAll(".nav-item"));
    const slides = Array.from(document.querySelectorAll(".slider-slide"));
    const currentIndexRef = { current: 0 };
    const isTweeningRef = { current: false };
    const textElement = document.getElementById("text");

    let touchStartX = 0;
    let touchEndX = 0;

    function handleGesture() {
        const deltaX = touchEndX - touchStartX;
        if (deltaX < -50) gotoSlide(1); // Swiped left
        if (deltaX > 50) gotoSlide(-1); // Swiped right
    }

    // Handle touchstart and touchend events for mobile swipe
    document
        .getElementById("wrapper")
        .addEventListener("touchstart", function (event) {
            touchStartX = event.changedTouches[0].screenX;
        });

    document
        .getElementById("wrapper")
        .addEventListener("touchend", function (event) {
            touchEndX = event.changedTouches[0].screenX;
            handleGesture();
        });

    // Mouse-based swipe functionality (for desktop)
    document
        .getElementById("wrapper")
        .addEventListener("mousedown", function (event) {
            touchStartX = event.clientX;
        });

    document
        .getElementById("wrapper")
        .addEventListener("mouseup", function (event) {
            touchEndX = event.clientX;
            handleGesture();
        });

    function updateNav(activeIndex) {
        navItems.forEach((item, index) => {
            const text = item.querySelector("span");
            const bar = item.querySelector(".nav-bar");

            if (index === activeIndex) {
                item.classList.add("active");
                text.style.opacity = "1";
                bar.style.opacity = "1";
            } else {
                item.classList.remove("active");
                text.style.opacity = "0.5";
                bar.style.opacity = "0.3";
            }
        });
    }

    function gotoSlide(value) {
        if (isTweeningRef.current) return;
        isTweeningRef.current = true;

        let nextIndex = currentIndexRef.current + value;
        const totalSlides = slides.length;

        if (nextIndex >= totalSlides) nextIndex = 0;
        else if (nextIndex < 0) nextIndex = totalSlides - 1;

        const currentSlide = slides[currentIndexRef.current];
        const nextSlide = slides[nextIndex];

        nextSlide.style.zIndex = 2;
        nextSlide.style.transform = "translateX(100%)";
        currentSlide.style.zIndex = 1;

        updateNav(nextIndex);

        // Animate current text out immediately
        textElement.style.opacity = "0";
        setTimeout(() => {
            // Wait 1.5s before animating the next text in to sync with slide
            textElement.innerHTML = slideTexts[nextIndex];
            textElement.style.transform = "translateY(50px)";
        }, 300);

        // Slide animation
        nextSlide.style.transition = "transform 2s ease";
        nextSlide.style.transform = "translateX(0%)";
        setTimeout(() => {
            // Once slide transition is almost complete, bring in the next text
            textElement.style.transition = "opacity 1s, transform 1s";
            textElement.style.opacity = "1";
            textElement.style.transform = "translateY(0px)";
        }, 1500); // Delay so it aligns with slide transition

        setTimeout(() => {
            currentSlide.style.zIndex = 0;
            isTweeningRef.current = false;
        }, 2000);

        currentIndexRef.current = nextIndex;
    }

    function gotoSlideDirect(index) {
        if (isTweeningRef.current || currentIndexRef.current === index) return;

        isTweeningRef.current = true;

        const currentSlide = slides[currentIndexRef.current];
        const nextSlide = slides[index];

        nextSlide.style.zIndex = 2;
        nextSlide.style.transform = "translateX(100%)";
        currentSlide.style.zIndex = 1;

        updateNav(index);

        // Animate current text out
        textElement.style.opacity = "0";
        setTimeout(() => {
            // Update text but delay the incoming animation
            textElement.innerHTML = slideTexts[index];
            textElement.style.transform = "translateY(50px)";
        }, 300);

        // Slide animation
        nextSlide.style.transition = "transform 2s ease";
        nextSlide.style.transform = "translateX(0%)";

        setTimeout(() => {
            // After the slide is almost complete, animate the text in
            textElement.style.transition = "opacity 1s, transform 1s";
            textElement.style.opacity = "1";
            textElement.style.transform = "translateY(0px)";
        }, 1500);

        setTimeout(() => {
            currentSlide.style.zIndex = 0;
            isTweeningRef.current = false;
        }, 2000);

        currentIndexRef.current = index;
    }

    // Event listeners for nav items
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => gotoSlideDirect(index));
    });

    // Next button
    document.getElementById("next").addEventListener("click", () => gotoSlide(1));

    // Initial setup
    slides[0].style.zIndex = 2;
    slides[0].style.transform = "translateX(0%)";
    slides.slice(1).forEach((slide) => {
        slide.style.zIndex = 1;
        slide.style.transform = "translateX(100%)";
    });
});
