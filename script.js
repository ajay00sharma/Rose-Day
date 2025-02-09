let path = window.location.pathname;

let name = path.substring(1);

if (name) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  document.getElementById("nametag").innerText = "By Your one and only " + name + "✨";
} else {
  document.getElementById("nametag").innerText =
    "By Your one and only Love ✨ ";
}
