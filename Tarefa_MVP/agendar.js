class ControladorAgenda {
    constructor(seletorFormulario, seletorLista) {
        this.formulario = document.getElementById(seletorFormulario);
        this.listaConsultas = document.getElementById(seletorLista);

        this.consultas = JSON.parse(localStorage.getItem('consultas')) || [];
        this.iniciar();
    }

    iniciar() {
        this.formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();
            this.adicionarConsulta();
        });

        this.atualizarLista();
    }

    sanitizar(texto) {
        return texto.replace(/[<>&"]/g, (c) => ({
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;'
        }[c]));
    }

    adicionarConsulta() {
        const novaConsulta = {
            especialista: document.getElementById('especialista').value,
            data: document.getElementById('data').value,
            hora: document.getElementById('hora').value,
            sintomas: document.getElementById('sintomas').value,
            contato: document.getElementById('contato').value
        };

        if (!novaConsulta.especialista || !novaConsulta.data || !novaConsulta.hora || !novaConsulta.contato) {
            alert("Por favor, preencha os campos Obrigatórios.");
            return;
        }

        novaConsulta.sintomas = this.sanitizar(novaConsulta.sintomas);
        novaConsulta.contato = this.sanitizar(novaConsulta.contato);

        this.consultas.push(novaConsulta);
        this.salvarConsultas();
        this.atualizarLista();
        this.formulario.reset();

        alert("Consulta agendada com sucesso!");
    }

    cancelarConsulta(indice) {
        this.consultas.splice(indice, 1);
        this.salvarConsultas();
        this.atualizarLista();
    }

    salvarConsultas() {
        localStorage.setItem('consultas', JSON.stringify(this.consultas));
    }

    atualizarLista() {
        this.listaConsultas.innerHTML = "";

        if (this.consultas.length === 0) {
            this.listaConsultas.innerHTML = '<li class="placeholder">Nenhuma consulta agendada.</li>';
            return;
        }

        this.consultas.forEach((consulta, indice) => {
            const item = document.createElement('li');
            item.classList.add('consulta-item'); 

            item.innerHTML = `
                <strong>${consulta.especialista}</strong>
                <span>${consulta.data} — ${consulta.hora}</span>
                ${consulta.sintomas ? `<span>${consulta.sintomas}</span>` : ""}
                <span>${consulta.contato}</span>

                <button class="cancelar" data-indice="${indice}">
                    <i class='bx bx-x'></i> Cancelar
                </button>
            `;

            item.querySelector("button").addEventListener("click", () => {
                if (confirm("Deseja cancelar esta consulta?")) {
                    this.cancelarConsulta(indice);
                }
            });

            this.listaConsultas.appendChild(item);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ControladorAgenda("form-agendar", "lista-consultas");
});
