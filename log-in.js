// const loader = document.querySelector(".loader");
// const load = document.querySelector(".load");
// window.addEventListener("DOMContentLoaded", () => {
//   loader.classList.add("load-hidden");
//   load.classList.add("load-hidden");
//   load.addEventListener("transitionend", () => {
//     document.body.removeChild(load);
//   });
// });
// form
const form = document.querySelector("#form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const error = document.getElementById("error");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rPassword = document.getElementById("rPassword");
form.addEventListener("submit", (e) => {
  const messages = [];
  // First Name
  if (firstName.value === "" || firstName.value.length < 4) {
    messages.push("Please fill out the Form");
    firstName.style.border = "solid 1px red";
  } else {
    firstName.style.border = "solid 1px black";
  }
  // last Name
  if (lastName.value === "") {
    messages.push(" write the last Name");
    lastName.style.border = "solid 1px red";
  } else if (lastName.value.length < 4) {
    messages.push("please write the last Name correctly");
    lastName.style.border = "solid 1px red";
  } else {
    lastName.style.border = "solid 1px black";
  }
  // Email
  if (email.value === "") {
    messages.push(" write the email");
    email.style.border = "solid 1px red";
  } else if (email.value.indexOf("@") === -1) {
    messages.push(" email must be with @");
  } else if (email.value.indexOf("gmail") === -1) {
    messages.push(" email must be with gmail");
  } else if (email.value.indexOf(".com") === -1) {
    messages.push(" email must be with .com");
  } else {
    email.style.border = "solid 1px black";
  }
  if (password.value === "") {
    messages.push(" write ur password");
    password.style.border = "solid 1px red";
  } else if (password.value.length <= 5) {
    messages.push("password greater than 5");
  } else {
    password.style.border = "solid 1px black";
  }
  if (rPassword.value === "") {
    messages.push(" Repeat ur password");
    rPassword.style.border = "solid 1px red";
  } else if (password.value !== rPassword.value) {
    messages.push("must be the same ");
  } else {
    rPassword.style.border = "solid 1px black";
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerHTML = messages.join(", ");
  } else {
    sendMail()
}
});                                                                     

