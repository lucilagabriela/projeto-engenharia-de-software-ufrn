document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const usuario = document.querySelector("input[type='email']").value.trim();
        const senha = document.querySelector("input[type='password']").value.trim();

        if (usuario === "" || senha === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        alert("Login aceito!");
        window.location.href = "agendar.html";
    });

});
