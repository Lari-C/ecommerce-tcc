export const menu = async ()=> {
    return await fetch('/components/menu.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    })
}

export const footer = async ()=> {
    return await fetch('/components/footer.html').then(function (response) {
        if (response.ok) {
            return response.text();
        }
        throw response;
    })
}
