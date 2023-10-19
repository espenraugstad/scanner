// To use Html5QrcodeScanner (more info below)
//import {Html5QrcodeScanner} from "html5-qrcode";

const resultDiv = document.getElementById("resultDiv");
const res = document.getElementById("res");
const reScan = document.getElementById("reScan");
let scanner = null;

startScanning();

reScan.addEventListener("click", () => {
  reScan.classList.add("hidden");
  res.innerText = "";
  startScanning();
});

function startScanning() {
  scanner = new Html5QrcodeScanner("reader", {
    qrbox: {
      width: 250,
      height: 250,
    },
    fps: 20,
  });
  scanner.render(success, error);
}

function success(result) {
  res.innerText = result;
  scanner.clear();
  document.getElementById("reader").innerHTML = "";
  reScan.classList.remove("hidden");
}

function error(err) {
  console.error(err);
}
