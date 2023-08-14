const loginInfo = {
  email: "user@gmail.com",
  password: "1234",
};

const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const formMassage = document.getElementById("form-massage");

document.getElementById("form").addEventListener("submit", function (event) {
  if (
    emailInput.value.toLowerCase() === loginInfo.email &&
    passwordInput.value === loginInfo.password
  ) {
    location.href = "dashboard.html";
  } else {
    passwordInput.value = "";
    formMassage.style.display = "block";
    setTimeout(function () {
      formMassage.style.display = "none";
    }, 3000);
  }
  event.preventDefault();
});

console.log(loginInfo.email);
console.log(loginInfo.password);
