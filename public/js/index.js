import { Router, State, Style } from "./Functions.js";

// body resset css
const body = document.querySelector('body');
body.style.margin = '0';
body.style.padding = '0';

const Home = () => {
    const useState = new State("state", "Home");
    const content = document.createElement('div');
    const header = document.createElement('h1');
    let input = document.createElement('input');
    let clear = document.createElement('button');
    clear.textContent = 'Clear';
    clear.addEventListener('click', () => {
        useState.setState('');
    });
    input.type = 'text';
    input.value = useState.getState();
    input.addEventListener('input', (e) => {
        useState.setState(e.target.value);
    });
    header.textContent = useState.getState();
    content.appendChild(header);
    content.appendChild(input);
    content.appendChild(clear);
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