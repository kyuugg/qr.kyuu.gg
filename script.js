const input = document.querySelector("#qrcode-input");
const button = document.querySelector("#qrcode-button");
const image = document.querySelector("#qrcode-image");

button.addEventListener("click", () => {
    QRCode.toDataURL(input.value).then((dataUrl) => {
        console.log(dataUrl);
        image.src = dataUrl;
    });
});
