(() => {
    const linkCss = document.createElement('link');
    const paragraph = document.querySelector('.teste-texto');
    const shadow = paragraph.attachShadow({
        mode: 'open'
    })

    linkCss.setAttribute('rel', 'stylesheet')
    linkCss.setAttribute('href', './components/link-css/style.css')

    const text = document.createElement('p');
    text.innerText = 'teste';
    shadow.appendChild(linkCss)
    shadow.appendChild(text)    
})()