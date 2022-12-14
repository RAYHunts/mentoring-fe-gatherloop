class Router {
    constructor(routes) {
        this.main = document.querySelector('main');
        this.routes = routes;
        this.Nav(this.routes);
    }
    Styler = new Style();


    Render = (route) => {
        this.main.innerHTML = '';
        console.log(route);
        console.log(!this.routes[route.path]);
        if (route.path == '/' || route.path == ''){
            this.main.appendChild(this.routes['/'].template);
        } else if (!this.routes[route.path]) {
            this.notFound();
        } else {
            this.main.appendChild(this.routes[route.path].template);
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
            let css = {
                'text-decoration': 'none',
                'color': 'black',
            }
            this.Styler.Stylize(css, a);
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

class Style {
    constructor() {
    }

    Stylize = (style, element) => {
        Object.keys(style).forEach((key) => {
            element.style[key] = style[key];
        });
    }
}

class State {
    constructor (key,state){
        this.key = key;
        if (localStorage.getItem(key) == null || localStorage.getItem(key) == undefined) {
            localStorage.setItem(key, state);
            this.setState(state);
            // this.onStateInit();
        }
        this.setState(localStorage.getItem(key));
    }

    getState = () => {
        return this.state;
    }

    setState = (state) => {
        this.state = state;
        localStorage.setItem(this.key, state);
        this.onStateChange();
    }

    onStateChange = () => {
        console.log('State Changed');
    }

    setOnStateChange = (callback) => {
        this.onStateChange = callback;
    }



}

export { Router, State, Style };