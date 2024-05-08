const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const param = urlParams.get("to");

// console.log("Kepada:",param);

if (param === null || !param) {
  document.write("Penerima Undangan");
} else {
  document.write(param);
}

