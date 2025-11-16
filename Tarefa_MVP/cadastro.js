class ControladorCadastro {
    constructor(seletorFormulario) {
        this.formulario = document.querySelector(seletorFormulario);
        this.iniciar();
    }

    iniciar() {
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const campos = [...document.querySelectorAll("input")];
            const resultadoValidacao = this.validarCadastro(campos);

            if (!resultadoValidacao.ok) {
                alert(resultadoValidacao.mensagem);
                return;
            }

            alert("Cadastro aceito!");
            window.location.href = "login.html";
        });
    }

    validarCadastro(campos) {
        for (let campo of campos) {
            if (campo.value.trim() === "") {
                return { ok: false, mensagem: "Por favor, preencha todos os campos." };
            }
        }

        const senha = campos[4].value;
        const confirmarSenha = campos[5].value;

        if (senha !== confirmarSenha) {
            return { ok: false, mensagem: "As senhas não coincidem!" };
        }

        return { ok: true };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ControladorCadastro("form");
});
