document.addEventListener("DOMContentLoaded", function() {
    const courseList = document.querySelector('.course-list');
    let startX = 0;
    let scrollLeft = 0;

    courseList.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = courseList.scrollLeft;
    });

    courseList.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const walk = (startX - touch.pageX) * 2; // Aumentamos la sensibilidad del swipe
        courseList.scrollLeft = scrollLeft + walk;
    });
});
