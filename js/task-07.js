const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

input.addEventListener("input", handlerInput);
function handlerInput(event) {
  text.style.fontSize = `${input.value}px`;
}
