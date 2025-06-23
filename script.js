document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("formMessage").textContent = `Terima kasih, ${name}. Pesanmu sudah diterima!`;
        this.reset();
    } else {
        document.getElementById("formMessage").textContent = "Silakan isi semua kolom.";
    }
});
