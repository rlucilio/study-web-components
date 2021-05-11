class ExpandingList extends HTMLUListElement {
    constructor() {
        super();

        console.log('expanding-list');
    }


}

customElements.define(
    'expanding-list',
    ExpandingList,
    {
        extends: 'ul'
    }
)