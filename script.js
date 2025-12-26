document.addEventListener("DOMContentLoaded", function () {

    console.log("Página cargada correctamente");

    const boxes = document.querySelectorAll('.service-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    boxes.forEach(box => observer.observe(box));

});
