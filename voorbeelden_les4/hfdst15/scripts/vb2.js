'use strict'

const handleLoad = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", () => {
        console.log("Button clicked.");
    });
}

window.addEventListener("load", handleLoad);