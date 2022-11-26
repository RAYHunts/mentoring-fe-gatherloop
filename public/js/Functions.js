class Router {
    constructor(routes) {
        this.main = document.querySelector('main');
        this.routes = routes;
        this.Nav(this.routes);
    }

    Render = (route) => {
        this.main.innerHTML = '';
        if (this.routes[route.path]) {
            this.main.appendChild(this.routes[route.path].template);
        } else if (route.path === '/') {
            this.main.appendChild(this.routes['/'].template);
        } else {
            this.main.appendChild(this.notFound());
        }

    }

    notFound () {
        this.main.innerHTML = `
        <h1>404</h1>
        <h2>Not Found</h2>
        `
    }

    Nav (routes) {
        const header = document.querySelector('header');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        Object.keys(routes).forEach((path) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = path;
            a.textContent = routes[path].title;
            a.style.textDecoration = 'none';
            a.style.color = '#fff';
            li.appendChild(a);
            ul.appendChild(li);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState(null, null, path);
                this.Render({ path });
            });
        });
        nav.appendChild(ul);
        header.appendChild(nav);
        
    }
}

export default Router;