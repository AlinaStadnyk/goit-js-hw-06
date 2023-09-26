const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(password.value.length);
  if (email.value.length && password.value.length) {
    console.log(data);
  } else alert("Fill in all the fields");

  event.currentTarget.reset();
}
