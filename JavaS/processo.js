const processoBtn = document.querySelector(".button");

function showAlert () {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.add("active");
}

function closeAlert () {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.remove("active");
}


processoBtn.addEventListener("click", () => {
    showAlert();
})

