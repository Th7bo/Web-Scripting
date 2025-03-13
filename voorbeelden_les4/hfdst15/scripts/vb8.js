'use strict'


const handleLoad = () => {
    window.addEventListener("keydown", event => {
        if (event.key == " " && event.ctrlKey && event.shiftKey) {
            console.log("Continuing!");
            event.preventDefault();
        }
    });
}

window.addEventListener("load", handleLoad);