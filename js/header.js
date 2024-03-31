document.addEventListener('DOMContentLoaded', function() {
    const btnMobile = document.getElementById('btn-mobile');

    function toggleMenu(event) {
        if(event.type === 'touchstart') event.preventDefault();
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if(active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
<<<<<<< HEAD
});

=======
});
>>>>>>> 742063a77ca044271585883f01009f78f83af955
