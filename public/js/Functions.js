class Router {
    constructor(routes) {
        this.main = document.querySelector('main');
        this.routes = routes;
        this.Nav(this.routes);
    }

    Render = (route) => {
        this.main.innerHTML = '';
        this.routes.forEach((r) => {
            if (route.path == r.path  ){
                this.main.appendChild(r.template);
                return;
            }
        })
        if (route.path == '/' || route.path ==  ''|| route.path == './') {
            this.main.appendChild(this.routes[0].template);
            return;
        } else {
            this.notFound();
        }
    }

    isAvailable(path) {
        this.routes.forEach((r) => {
            if (path == r.path){
                return true;
            } 
        });
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
        routes.forEach(link => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = link.path;
            a.textContent = link.title;
            a.style.textDecoration = 'none';
            a.style.color = 'coral';
            li.appendChild(a);
            ul.appendChild(li);
            a.addEventListener('click', (e) => {
                e.preventDefault();
                history.pushState(null, null, link.path);
                this.Render(link);
            });
        });
        nav.appendChild(ul);
        header.appendChild(nav);
        
    }
}

export default Router;