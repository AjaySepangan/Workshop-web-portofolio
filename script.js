document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msgBox = document.getElementById("formMessage");

    if (name && email && message) {
        msgBox.style.color = "green";
        msgBox.textContent = `Terima kasih, ${name}. Pesanmu telah dikirim!`;
        this.reset();
    } else {
        msgBox.style.color = "red";
        msgBox.textContent = "Harap isi semua kolom dengan benar.";
    }
});
