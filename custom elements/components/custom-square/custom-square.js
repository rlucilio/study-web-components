class CustomSquare extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({
            mode: 'open'
        });

        const div = document.createElement('div');
        const style = document.createElement('style');

        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
        this.updateStyle();
    }

    attributeChangedCallback() {
        console.log('Custom square element attributes changed.');
        this.updateStyle();
    }

    updateStyle() {
        const shadow = this.shadowRoot;
        shadow.querySelector('style').textContent = `
            div {
                width: ${this.getAttribute('l')}px;
                height: ${this.getAttribute('l')}px;
                background-color: ${this.getAttribute('c')}
            }
        `;
    }

    static get observedAttributes() {
        return ['c', 'l']
    }
}

customElements.define('custom-square', CustomSquare);