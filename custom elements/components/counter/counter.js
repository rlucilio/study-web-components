class Counter extends HTMLElement {
    constructor() {
        super();
        const outterCounter = this.dataset.contador;
        this.contador = outterCounter || 0;
    }

    connectedCallback() {
        this.innerHTML = `
            <button id="counterButton">Contador</button>
            <p id="showCounter">0</p>
        `;

        const paragraph = this.querySelector("#showCounter");
        paragraph.textContent = this.contador;

        const button = this.querySelector("#counterButton");
        button.addEventListener("click", () => {
            this.contador++;
            paragraph.textContent = this.contador;
        });
    }
}

customElements.define("x-counter", Counter);