class MyTitle extends HTMLElement {
    connectedCallback() {
        this.li
        this.innerHTML = `
            <link rel="stylesheet" href="./components/title/title.css">
            <h1>Meu Titulo</h1>
        `;
    }
}

customElements.define('my-title', MyTitle);