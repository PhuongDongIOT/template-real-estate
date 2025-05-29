// Xử lý hover show modal
const hoverAreas = document.querySelectorAll('.hover-area');
const closeButtons = document.querySelectorAll('.close-btn');

hoverAreas.forEach(area => {
    area.addEventListener('mouseenter', () => {
        const modalId = area.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('show');
        console.log("dsadas")
    });
    area.addEventListener('mouseleave', () => {
        const modalId = area.getAttribute('data-modal');
        document.getElementById(modalId).classList.remove('show');
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('show');
    });
});
