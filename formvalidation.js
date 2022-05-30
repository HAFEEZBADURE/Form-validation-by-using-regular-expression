const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

let validEmail = false;
let validPhone = false;
let validUser = false;

name.addEventLister("blur", () => {
  console.log("Name is blurred");
  // validate name here.
  let regex = /^[a-zA-Z}([0-9a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Ypur name is valid ");
    name.classList.remove("is-invalid");
  } else {
    console.log("Your name is not valid ");
    name.classList.add("is-invalid");
  }
});

email.addEventLister("blur", () => {
  console.log("email is blurred");
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+$)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("your email is valid ");
    email.classList.remove("is-invalid");
  } else {
    console.log("Your email is not valid");
    email.classList.add("is-invalid");
  }
});

phone.addEventLister("blue", () => {
  console.log("phone is blurred");
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-valid");
  } else {
    console.log("Your is phone not valid");
    phone.add("is-invalid");
  }
});

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("you clicked on submit");

  if (validEmail && validPhone && validUser) {
    console.log("Phone email and user are valid , submitting the form");
  } else {
    console.log(
      "one of phone email or user are not valid , hence not submitting the , please correct the errors and try again"
    );
    let failure = document.getElementById("failure");
    success.classList.add("show");
  }
});
