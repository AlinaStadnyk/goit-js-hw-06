const userName = document.querySelector("input");
const result = document.querySelector("#name-output");
userName.addEventListener("input", handlerInput);
function handlerInput(event) {
  if (event.currentTarget.value.length) {
    result.textContent = event.currentTarget.value;
  } else {
    result.textContent = "Anonymous";
  }
}
