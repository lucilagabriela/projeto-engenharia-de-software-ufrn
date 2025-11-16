const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require("jsdom");
const ControladorLogin = require("../Tarefa_MVP/controladorlogin.js");

describe("Testes da classe ControladorLogin", () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(`
            <form id="login-form">
                <input type="email" id="email" />
                <input type="password" id="senha" />
                <button type="submit">Entrar</button>
            </form>
        `);

        document = dom.window.document;

        global.document = document;
        global.window = dom.window;

        global.alert = jest.fn();
        global.window.location = { href: "" };
    });

    test("Email vazio deve retornar erro", () => {
        const controlador = new ControladorLogin("#login-form");

        const resultado = controlador.validarCampos("", "123");

        expect(resultado.ok).toBe(false);
        expect(resultado.mensagem).toBe("Por favor, preencha todos os campos.");
    });

    test("Senha vazia deve retornar erro", () => {
        const controlador = new ControladorLogin("#login-form");

        const resultado = controlador.validarCampos("user@email.com", "");

        expect(resultado.ok).toBe(false);
        expect(resultado.mensagem).toBe("Por favor, preencha todos os campos.");
    });

    test("Campos válidos devem retornar ok", () => {
        const controlador = new ControladorLogin("#login-form");

        const resultado = controlador.validarCampos("teste@email.com", "123");

        expect(resultado.ok).toBe(true);
    });
});
