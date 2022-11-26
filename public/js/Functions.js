class Router {
    constructor(routes) {
        this.routes = routes;
        this.Nav(routes);
    }

    Render = (path) => {
        console.log(path);
    }

    Nav (routes) {
        console.log(routes);
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        routes?.forEach(link => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = link.path;
            a.textContent = link.title;
            a.style.textDecoration = 'none';
            a.style.color = '#fff';
            li.appendChild(a);
            ul.appendChild(li);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState(null, null, link.path);
                this.Render(link.path);
            });
        });
        nav.appendChild(ul);
        document.body.appendChild(nav);
    }
}

export default Router;