const main = document.querySelector('main');
// body resset css
body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';
const Nav = () => {
    const nav = document.createElement('nav');
    const links = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' }
    ];
    let ul = document.createElement('ul');
    ul.style.display = 'flex';
    ul.style.listStyle = 'none';
    ul.style.justifyContent = 'space-around';
    ul.style.width = '100%';
    ul.style.paddingTop = '10px';
    ul.style.paddingBottom = '10px';
    ul.style.margin = '0';
    ul.style.backgroundColor = '#333';
    links.forEach(link => {
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
            render(link.path);
        });
    });
    nav.appendChild(ul);
    main.previousElementSibling.appendChild(nav);
};

const Home = () => {
    const content = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Home';
    content.appendChild(header);
    main.appendChild(content);
};

const About = () => {
    const content = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'About';
    content.appendChild(header);
    main.appendChild(content);
};

const routes = {
    '/': Home,
    '/about': About
};


const render = (href) => {
    main.innerHTML = '';
    if (href == '/' || href ==  ''|| href == './') {
        console.log(href in routes);
        Home();
    } else if (href in routes) {
        routes[href]();
    } else {
        notFound();
    }
}
const notFound = () => {
    main.innerHTML = `
        <h1>404</h1>
        <p>Page not found</p>
    `;
}

Nav();
render(document.location.pathname);