document.addEventListener('DOMContentLoaded', function () {
    const li = document.querySelectorAll('.nav-item');
    const nav = document.querySelector('.navbar');
    const burger = document.querySelector('.nav-btn');

    function handleHidden() {
        if (window.scrollY >= 120) {
            li.forEach(item => {
                item.style.transition = 'opacity .3s'; // Dodanie animacji zanikania
                item.style.opacity = '0'; // Ustawienie przezroczystości na 0
            });
        } else {
            li.forEach(item => {
                item.style.transition = 'opacity .3s'; // Dodanie animacji pojawiania się
                item.style.opacity = '1'; // Przywrócenie przezroczystości do 1
            });
        }
    }

    window.addEventListener('scroll', handleHidden);
});
