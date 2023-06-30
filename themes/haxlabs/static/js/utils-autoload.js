window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("[data-link]").forEach((e) => {
        e.addEventListener('click', () => {
            window.location.href = e.getAttribute('data-link');
        });
    });
});