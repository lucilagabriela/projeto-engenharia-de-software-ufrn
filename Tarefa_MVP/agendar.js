const form = document.getElementById('form-agendar');
const lista = document.getElementById('lista-consultas');

// carregar consultas do localStorage
let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
atualizarLista();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const especialista = document.getElementById('especialista').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const sintomas = document.getElementById('sintomas').value;
    const contato = document.getElementById('contato').value;

    const novaConsulta = { especialista, data, hora, sintomas, contato };
    consultas.push(novaConsulta);
    localStorage.setItem('consultas', JSON.stringify(consultas));

    atualizarLista();
    form.reset();

    alert('Consulta agendada com sucesso!');
});

function atualizarLista() {
    lista.innerHTML = '';

    if (consultas.length === 0) {
        lista.innerHTML = '<li class="placeholder">Nenhuma consulta agendada.</li>';
        return;
    }

    consultas.forEach((consulta, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${consulta.especialista}</strong><br>
            ${consulta.data} — ${consulta.hora}<br>
            ${consulta.sintomas ? '' + consulta.sintomas + '<br>' : ''}
            ${consulta.contato}
            <button class="cancelar" onclick="cancelarConsulta(${index})">
                <i class='bx bx-x'></i> Cancelar
            </button>
        `;
        lista.appendChild(li);
    });
}

function cancelarConsulta(index) {
    if (confirm('Deseja cancelar esta consulta?')) {
        consultas.splice(index, 1);
        localStorage.setItem('consultas', JSON.stringify(consultas));
        atualizarLista();
    }
}
