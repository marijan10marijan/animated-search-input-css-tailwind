const clearInputIcon = document.getElementById("clearInputIcon");
const inputElement = document.getElementById("input");

clearInputIcon.addEventListener("click", () => {
  inputElement.value = "";
});
