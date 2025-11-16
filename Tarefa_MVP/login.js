class ControladorLogin {
    constructor(seletorFormulario) {
        this.formulario = document.querySelector(seletorFormulario);
        this.iniciar();
    }

    iniciar() {
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const email = document.querySelector("input[type='email']").value.trim();
            const senha = document.querySelector("input[type='password']").value.trim();

            const resultadoValidacao = this.validarCampos(email, senha);
            if (!resultadoValidacao.ok) {
                alert(resultadoValidacao.mensagem);
                return;
            }

            alert("Login aceito!");
            window.location.href = "agendar.html";
        });
    }

    validarCampos(email, senha) {
        if (!email || !senha) {
            return { ok: false, mensagem: "Por favor, preencha todos os campos." };
        }
        return { ok: true, mensagem: "OK" };
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ControladorLogin("form");
});
