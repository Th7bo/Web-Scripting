'use strict'

const handleLoad = () => {
    let lastX; // Tracks the last observed mouse X position
    let bar = document.querySelector("div");
    bar.addEventListener("mousedown", event => {
        if (event.button == 0) {
            lastX = event.clientX;
            window.addEventListener("mousemove", moved);
            event.preventDefault(); // Prevent selection
        }
    });

    function moved(event) {
        if (event.buttons == 0) {
            window.removeEventListener("mousemove", moved);
        } else {
            let dist = event.clientX - lastX;
            let newWidth = Math.max(10, bar.offsetWidth + dist);
            bar.style.width = newWidth + "px";
            lastX = event.clientX;
        }
    }
}

window.addEventListener("load", handleLoad);