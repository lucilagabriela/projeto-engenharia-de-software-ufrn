## Esse arquivo é destinado à explicar os testes do nosso projeto.

O arquivo controladorlogin.test.js está testando somente o método validarCampos() da classe ControladorLogin. Esse método faz a seguinte regra:

~~~
validarCampos(email, senha) {
    if (!email || !senha) {
        return { ok: false, mensagem: "Por favor, preencha todos os campos." };
    }
    return { ok: true, mensagem: "OK" };
}
~~~

Ou seja, ele só verifica se:
* email está vazio → erro
* senha está vazia → erro
* ambos preenchidos → OK

### Testes
1. “Email vazio deve retornar erro”

O objetivo do teste é verificar que se o email for vazio, o método retorna um objeto com **ok: false** mensagem de erro
O teste faz algo assim:
~~~
const resultado = controlador.validarCampos("", "senha123");
~~~
E espera:
~~~
expect(resultado.ok).toBe(false);
expect(resultado.mensagem).toBe("Por favor, preencha todos os campos.");
~~~
*Isso garante que o método detecta falta de email.*


2. “Senha vazia deve retornar erro”

Agora o oposto:
~~~
const resultado = controlador.validarCampos("teste@teste.com", "");
~~~

Espera-se o mesmo comportamento:

~~~
expect(resultado.ok).toBe(false);
expect(resultado.mensagem).toBe("Por favor, preencha todos os campos.");
~~~
*Isso garante que o método detecta falta de senha.*


3. “Campos válidos devem retornar ok”

Vamos demonstrar um caso de sucesso abaixo:
~~~
const resultado = controlador.validarCampos("teste@teste.com", "senha123");
~~~

O teste verifica:
~~~
expect(resultado.ok).toBe(true);
expect(resultado.mensagem).toBe("OK");
~~~

*Isso garante que o método aceita email e senha válidos.*

### Resultado dos testes

<img width="753" height="105" alt="Captura de tela 2025-11-17 084201" src="https://github.com/user-attachments/assets/b25cf4dc-949d-4c46-93f6-f040bf2fc426" />

Significa que:
* 35.29% de linhas foram testadas.
* 62.5% de branches → aqui é bom, porque o método validarCampos tem 2 caminhos (erro/ok), e ambos foram testados.
* 50% de funções testadas → testamos apenas 1 das 2 funções (validarCampos), mas não testamos iniciar().
As linhas não cobertas são:
* 5-22

*Ou seja, tudo dentro de iniciar() e o constructor() não foram testados.*
