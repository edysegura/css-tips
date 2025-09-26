const rootElement = document.documentElement;
const scaleDisplay = document.getElementById("current-scale");
const [doubleButton, resetButton] = document.querySelectorAll("button");

const getScale = () => {
  const rootStyles = window.getComputedStyle(rootElement);
  return parseFloat(rootStyles.getPropertyValue("--scale-factor").trim());
};

const setScale = (scale) => {
  const newScale = Math.round(scale * 100) / 100;
  rootElement.style.setProperty("--scale-factor", newScale);
  scaleDisplay.textContent = newScale;
};

const increaseScale = () => {
  const currentScale = getScale();
  setScale(currentScale * 1.5);
};

const resetScale = () => {
  setScale(1);
};

doubleButton.addEventListener("click", increaseScale);
resetButton.addEventListener("click", resetScale);
