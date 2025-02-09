 function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }
        let name = getQueryParam("name");

  if (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("nametag").innerText = "By Your one and only " + name + "✨";
} else {
  document.getElementById("nametag").innerText =
    "By Your one and only Love ✨ ";
}
