const counter = document.querySelector("#value");
const btns = document.querySelectorAll("button");
const btnArr = Array.from(btns);
let counterValue = 0;
btnArr.forEach((btn) => {
  if (btn.dataset.action === "decrement") {
    btn.addEventListener("click", handlerClickM);
    function handlerClickM(event) {
      counterValue -= 1;
      counter.innerHTML = counterValue;
    }
  } else if (btn.dataset.action === "increment") {
    btn.addEventListener("click", handlerClickP);
    function handlerClickP(event) {
      counterValue += 1;
      counter.innerHTML = counterValue;
    }
  }
});
