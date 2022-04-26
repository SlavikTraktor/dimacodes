let inputText = document.getElementById("inputText");

let saveBackgroundColor = false;
inputText.onclick = (e) => {
    saveBackgroundColor = !saveBackgroundColor;
}

inputText.onmouseenter = (e) => {
    inputText.setAttribute("style", "background: yellow");
}

inputText.onmouseleave = (e) => {
    if(saveBackgroundColor === false) {
        inputText.removeAttribute("style");
    }
}
