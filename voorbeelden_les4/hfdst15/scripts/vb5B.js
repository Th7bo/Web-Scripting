'use strict'


const handleLoad = () => {

    document.body.addEventListener("click", event => {
        console.log(event.target.nodeName);
        if (event.target.nodeName == "BUTTON") {
            console.log("Clicked", event.target.textContent);
        }
    });
}

window.addEventListener("load", handleLoad);