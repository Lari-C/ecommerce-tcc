const menu = document.getElementById('menu-component');
const footer = document.getElementById('footer-component');

addEventListener("load", () => {
    console.log('carregou')
    fetch('/frontend/components/menu.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    }).then(function (html) {
        menu.innerHTML = html;
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
