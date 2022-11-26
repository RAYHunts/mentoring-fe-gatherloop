import Router from "./Functions.js";

// body resset css
const body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';
const Home = () => {
    const content = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'Home';
    content.appendChild(header);
    return content;
};

const About = () => {
    const content = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = 'About';
    content.appendChild(header);
    return content;
};
const Routes = {
    '/': {
        title: 'Home',
        template: Home()
    },
    '/about': {
        title: 'About',
        template: About()
    }
}
const useRouter = new Router(Routes);
useRouter.Render({ path: window.location.pathname });