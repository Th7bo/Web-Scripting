'use strict'


const handleLoad = () => {
    let para = document.querySelector("p")
    window.addEventListener("keydown", event => {
        if (event.key == "v") {
            document.body.style.background = "violet";
        } else if (event.key == "p") {
            para.style.color = "green";
        }
    });
    window.addEventListener("keyup", event => {
        if (event.key == "v") {
            document.body.style.background = "";
        } else if (event.key == "p") {
            para.style.color = "";
        }
    });
}

window.addEventListener("load", handleLoad);