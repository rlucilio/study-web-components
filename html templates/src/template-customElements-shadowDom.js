customElements.define('my-p', 
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('my-p');
            const templateContent = template.content;

            const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(templateContent.cloneNode(true))
        }
    }
)