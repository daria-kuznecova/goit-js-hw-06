const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  // const formEl = {
  //   elementsEmail: email.value,
  //   elementsPassword: password.value,
  // };

  // console.log(formEl);

  console.log({ email: email.value, password: password.value });

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else return;

  event.currentTarget.reset();
});

// const inputs = document.querySelectorAll("input");
// inputs.forEach((input) => {
//   if (input.value.trim() === "") {
//     alert("Error");
//   }
// });
