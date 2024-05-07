const menu = document.getElementById('menu-component');
const footer = document.getElementById('footer-component');

addEventListener("load", () => {
    fetch('/frontend/components/menu.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (html) {
        menu.innerHTML = html;
        
        document.getElementById('btn-mobile').addEventListener('click', toggleMenu);
        document.getElementById('btn-mobile').addEventListener('touchstart', toggleMenu);
            
    });

    fetch('/frontend/components/footer.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (html) {
        footer.innerHTML = html;
    });
});

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
