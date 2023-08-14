const totalDeposit = document.getElementById("total-deposit");
const totalWithdraw = document.getElementById("total-withdraw");
const totalBalance = document.getElementById("total-balance");
const depositAmount = document.getElementById("deposit-amount");
const withdrawAmount = document.getElementById("withdraw-amount");
const insufficientMassage = document.getElementById("insufficient-massage");
const depositSuccess = document.getElementById("deposit-success");
const withdrawSuccess = document.getElementById("withdraw-success");

document
  .getElementById("deposit-form")
  .addEventListener("submit", function (event) {
    totalDeposit.innerText =
      parseFloat(depositAmount.value) + parseFloat(totalDeposit.innerHTML);
    totalBalance.innerText =
      parseFloat(depositAmount.value) + parseFloat(totalBalance.innerText);
    depositSuccess.style.display = "block";
    setTimeout(function () {
      depositSuccess.style.display = "none";
    }, 1000);
    depositAmount.value = "";

    event.preventDefault();
  });

document
  .getElementById("withdraw-form")
  .addEventListener("submit", function (event) {
    if (parseFloat(withdrawAmount.value) > parseFloat(totalBalance.innerText)) {
      withdrawAmount.value = "";
      insufficientMassage.style.display = "block";
      setTimeout(function () {
        insufficientMassage.style.display = "none";
      }, 3000);
    } else {
      totalWithdraw.innerText =
        parseFloat(withdrawAmount.value) + parseFloat(totalWithdraw.innerText);
      totalBalance.innerText =
        parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
      withdrawSuccess.style.display = "block";
      setTimeout(function () {
        withdrawSuccess.style.display = "none";
      }, 1000);
      withdrawAmount.value = "";
    }

    event.preventDefault();
  });
