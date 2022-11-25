class Home {
    constructor() {
        this.title = 'Home';
        this.content = document.createElement('div');
        this.header = document.createElement('h1');
        this.header.textContent = this.title;
        this.content.appendChild(this.header);
    }
}

class About {
    constructor() {
        this.title = 'About';
        this.content = document.createElement('div');
        this.content.innerHTML = `
            <h1>${this.title}</h1>
            <p>About page</p>
        `;
    }
}

export { Home, About };