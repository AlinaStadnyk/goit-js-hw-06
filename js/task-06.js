const input = document.querySelector("#validation-input");

input.addEventListener("blur", handlerValidation);
function handlerValidation(event) {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
