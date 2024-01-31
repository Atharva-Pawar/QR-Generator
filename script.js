let input = document.querySelector(".input");
let image = document.querySelector(".image");
let button = document.querySelector(".btn");

function generateQR() {

    if (input.value === "") {
        image.alt = "Please enter text or URL";
    }
    else {
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }
}

button.addEventListener('click', function () {
    generateQR();
    image.style.display = "block";
})