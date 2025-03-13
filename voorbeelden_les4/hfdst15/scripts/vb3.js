'use strict'

const handleLoad = () => {
    let button = document.querySelector("button");
    button.addEventListener("mousedown", event => {
        if (event.button == 0) {
            console.log("Left button");
        } else if (event.button == 1) {
            console.log("Middle button");
        } else if (event.button == 2) {
            console.log("Right button");
        }
    });
}
window.addEventListener("contextmenu", e => e.preventDefault());
window.addEventListener("load", handleLoad);