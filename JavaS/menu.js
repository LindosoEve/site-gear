function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

// Gerencie o dropdown do mobile
document.querySelectorAll('.mobile-menu #dropdown > a').forEach((dropdownLink) => {
    dropdownLink.addEventListener('click', function (e) {
        e.preventDefault(); // Evita navegação ao clicar no link
        let dropdown = this.parentElement;
        if (dropdown.classList.contains('opens')) {
            dropdown.classList.remove('opens');
        } else {
            dropdown.classList.add('opens');
        }
    });
});
