var img = window.document.querySelector("img#img1");

function acende() { 
    img.src = "images/lampada-on.jpg";
    window.document.body.style.backgroundColor = "rgb(233, 201, 98)";
}

img.addEventListener("click", acende);
