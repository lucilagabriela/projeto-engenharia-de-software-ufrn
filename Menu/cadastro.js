document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = document.querySelectorAll("input");

        // Verificar campos vazios
        for (let input of inputs) {
            if (input.value.trim() === "") {
                alert("Por favor, preencha todos os campos.");
                return;
            }
        }

        // Verificar senhas
        const senha = inputs[4].value;
        const confirmarSenha = inputs[5].value;

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Tudo certo
        alert("Cadastro aceito!");
        window.location.href = "login.html";
    });
});
