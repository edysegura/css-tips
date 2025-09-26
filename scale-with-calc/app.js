const button = document.querySelector("button");

function increaseScale() {
  const rootStyles = window.getComputedStyle(document.documentElement);
  const currentScale = parseFloat(
    rootStyles.getPropertyValue("--scale-factor")
  );
  const scaleDisplay = document.getElementById("current-scale");
  const newScale = currentScale * 2;
  scaleDisplay.textContent = newScale;
  document.documentElement.style.setProperty("--scale-factor", newScale);
}

button.addEventListener("click", increaseScale);
