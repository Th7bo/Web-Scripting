'use strict'


const handleLoad = () => {
    let help = document.querySelector("#help");
    let fields = document.querySelectorAll("input");
    for (let field of fields) {
        field.addEventListener("focus", event => {
            let text = event.target.getAttribute("data-help");
            help.appendChild(document.createTextNode(text));
        });
        field.addEventListener("blur", event => {
            while (help.firstChild) {
                help.removeChild(help.firstChild);
            }

        });
    }
}

window.addEventListener("load", handleLoad);