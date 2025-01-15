const padexBtn = document.querySelectorAll(".button");

function showAlert () {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.add("active");
}

function closeAlert() {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.remove("active");
  }


padexBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        showAlert();
    });
});