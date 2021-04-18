class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log(`Quantidade de letras`, this.innerText.length);
    }
}

customElements.define('word-count', WordCount, { 
    extends: 'p'
});