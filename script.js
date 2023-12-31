const reader = document.getElementById('reader');
const resultDiv = document.getElementById("resultDiv");
const res = document.getElementById("res");
const reScan = document.getElementById("reScan");
let scanner = null;

console.log(reader.clientWidth);
startScanning();

reScan.addEventListener("click", () => {
  reScan.classList.add("hidden");
  res.innerText = "";
  startScanning();
});

function startScanning() {
  scanner = new Html5QrcodeScanner("reader", {
    qrbox: {
      width: reader.clientWidth > 250 ? 250 : 0.2*reader.clientWidth,
      height: reader.clientWidth > 250 ? 250 : 0.2*reader.clientWidth,
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
