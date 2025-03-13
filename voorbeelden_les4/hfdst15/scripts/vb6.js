'use strict'


const handleLoad = () => {
    let link = document.querySelector("a");
    link.addEventListener("click", event => {
        console.log("Nope.");
        event.preventDefault();
    });
}

window.addEventListener("load", handleLoad);