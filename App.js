let generateQr = document.getElementById("submit");
let qrCodeDiv = document.getElementById("qrcode");

function onGenerateSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("input").value;
  hideQrCode();

  if (input === "") {
    alert("Please enter your value");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      getQrCode(input);
    }, 1000);
  }
}

const getQrCode = (value) => {
  var qrcode = new QRCode("qrcode", {
    text: value,
    width: 200,
    height: 200,
  });
};

const hideQrCode = () => {
  qrCodeDiv.innerHTML = "";
};

function showSpinner() {
  document.getElementById("qr").style.display = "inline-block";
}

function hideSpinner() {
  document.getElementById("qr").style.display = "none";
}

hideSpinner();

generateQr.addEventListener("click", onGenerateSubmit);
