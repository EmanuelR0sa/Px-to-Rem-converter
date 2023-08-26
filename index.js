//Convert px to Rem;
const pxToRemConvertor = function () {
  const pxValue = parseInt(document.getElementById("pxValue").value);
  const computeResult = pxValue * 0.0625;
  document.getElementById("result").innerHTML = `${computeResult} Rem`;
};

document.addEventListener("input", pxToRemConvertor);

// Dark mode
const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    icon.className = "bi bi-brightness-high-fill";
  } else {
    icon.className = "bi bi-moon-fill";
  }
});
