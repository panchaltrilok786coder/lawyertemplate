// ===== ROTATING WHEEL =====
const circle = document.getElementById('circle');

if (circle) {
    const texts = circle.querySelectorAll('.section p');
    let angle = 0;

    setInterval(() => {
        angle = (angle + 90) % 360;

        circle.style.transform = `rotate(${angle}deg)`;

        texts.forEach(p => {
            p.style.transform = `rotate(${-angle}deg)`;
        });

    }, 5000);
}