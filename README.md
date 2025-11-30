# Projeto de Engenharia de Software — UFRN
Repositório para armazenar os projetos de software da disciplina DCA3603 - ENGENHARIA DE SOFTWARE e DCA3604 - BANCO DE DADOS, da Universidade Federal do Rio Grande do Norte.

## Integrantes
* Jundi Taneshi Holanda Tanaka
* Kaiky Hanry Alencar Fernandes
* Lucila Gabriela Gomes Costa

## Tema
Sistema de Cadastro Médico Para Clínicas.

## Descrição e Justificativa
Aplicativo que possibilite o cadastramento de clientes para uma clínica médica, em que é requerido seus dados pessoais e a descrição de sintomas, para que seja facilitado a marcação de exames.

Analisamos a falta de organização e tempo que seria a marcação de consultas médicas. Com isso, pensamos em desenvolver um software para a otimização de tempo e recursos para essa finalidade.

## User history

### 1ª história de usuário:
Descrição: Como usuário, quero me cadastrar para realizar futuros agendamentos.

    1. O usuário deve adicionar seus dados pessoais.
    2. O sistema deve mostrar o cadastro do usuário.

### 2ª história de usuário:
Descrição: Como usuário, desejo agendar uma consulta.

    1. O usuário cadastrado informa seus sintomas.
    2. O sistema mostra horários e profissionais disponíveis da especialidade requerida.
    3. ⁠O sistema registra a solicitação de consulta.
    4. ⁠O médico pode visualizar o novo agendamento realizado.

### 3ª história de usuário:
Descrição: Como usuário, desejo cancelar uma consulta.

    1. O usuário com consulta agendada, solicita o cancelamento.
    2. ⁠O usuário informa o motivo e realiza o cancelamento.
    3. ⁠O sistema deve mostrar novamente o horário como disponível.

## Diagramas
### 1. Diagrama de Classes
O Diagrama de Classes foi elaborado para representar a estrutura estática do sistema de agendamento de consultas médicas, destacando as principais entidades envolvidas e seus relacionamentos.

As classes definidas foram:
* Usuário: representa o paciente que acessa o sistema, podendo se cadastrar, atualizar dados e solicitar consultas.
* Médico: representa o profissional de saúde disponível para atendimento, com informações como especialidade e horários disponíveis.
* Consulta: representa o vínculo entre o paciente e o médico, contendo informações sobre data, horário, status, sintomas e motivo de cancelamento.
  
![diagrama_classes](https://github.com/user-attachments/assets/915a0046-a3c3-4eb5-960b-cdb206a8c854)

A escolha desse diagrama se justifica por ele permitir visualizar claramente a estrutura de dados e as responsabilidades de cada classe, além de evidenciar as relações 1:N entre usuários, consultas e médicos.
Isso facilita o entendimento do modelo de domínio e serve de base para o desenvolvimento orientado a objetos do sistema.

### 2. Diagrama de Atividades
O Diagrama de Atividades foi desenvolvido para representar o fluxo de ações do usuário no processo de login, cadastro e gerenciamento de consultas (confirmação, edição ou cancelamento). Esse tipo de diagrama é fundamental para compreender a sequência de atividades e as possíveis ramificações do processo.

O diagrama mostra as etapas:
1. O usuário informa seus dados.
2. O sistema valida o login; se for inválido, ocorre o cadastro.
3. Após login, o usuário seleciona e valida uma consulta.
4. Dependendo do resultado, ele pode confirmar, editar ou cancelar a consulta, informando o motivo, quando aplicável.
5. O processo termina com a finalização do registro ou cancelamento.

![diagrama_atividades](https://github.com/user-attachments/assets/4ac265b8-cece-422a-b353-909cdbabe0c8)

A escolha desse diagrama se justifica por ele representar o comportamento dinâmico do sistema, descrevendo o fluxo de controle e as decisões lógicas que o usuário e o sistema tomam durante a interação.
Esse tipo de diagrama é fundamental para compreender a sequência de atividades e as possíveis ramificações do processo.

## Princípios de Projeto 

Eles orientam o desenvolvimento de software para alcançar propriedades cruciais de um bom projeto:

1. Integridade Conceitual: O sistema deve ter uma visão unificada e consistente em todas as suas partes (interface e código), facilitando o entendimento e a manutenção.

2. Ocultamento de Informação (Encapsulamento): Classes devem esconder seus detalhes internos, expondo apenas interfaces públicas estáveis. Isso permite que a implementação interna evolua sem afetar os usuários da classe.

3. Coesão: Módulos (classes/métodos) devem ter uma única responsabilidade ou oferecer um serviço bem definido.

4. Acoplamento: O grau de dependência entre classes. O objetivo é buscar um acoplamento "bom" ou "aceitável", onde a dependência ocorre por meio de interfaces estáveis para obter um serviço útil.

Os Princípios de Projeto
1. Princípio da Responsabilidade Única (SRP): Diretamente ligado à Coesão, estabelece que uma classe deve ter apenas uma razão para mudar.

2. Princípio da Segregação de Interfaces (ISP): Relacionado à Coesão, propõe interfaces pequenas e específicas, evitando que clientes dependam de métodos que não utilizam.

3. Princípio da Inversão de Dependências (DIP): Visa diminuir o Acoplamento, recomendando depender de abstrações (interfaces) em vez de implementações concretas (classes).

4. Princípio Aberto/Fechado (OCP): Uma classe deve ser "aberta para extensão, mas fechada para modificação", permitindo adicionar novas funcionalidades sem alterar o código-fonte existente.

5. Princípio de Demeter (Lei do Menor Conhecimento): Relacionado ao Ocultamento de Informação, sugere evitar longas cadeias de chamadas de métodos, quebrando o encapsulamento.

6. Princípio da Substituição de Liskov (LSP): Estabelece que uma subclasse deve poder substituir sua classe base sem quebrar o programa, mantendo as garantias e comportamentos da classe mãe.

7. Prefira Composição a Herança: A composição (relação "possui", reuso "caixa-preta") é frequentemente mais flexível e robusta que a herança (relação "é-um", reuso "caixa-branca"), promovendo melhor encapsulamento.

Princípios Selecionados para o Projeto:
1. Princípio da Responsabilidade Única (SRP): É aplicado para evitar classes inespecíficas. Garante que a alteração de uma funcionalidade (ex: agendamento) não gere o risco de quebrar outra (ex: cadastro de usuário), pois elas residem em classes separadas.

2. Princípio da Inversão de Dependências (DIP): É fundamental para criar um sistema desacoplado, flexível e testável. A regra é clara: módulos de alto nível (regra de negócio) devem depender de abstrações (interfaces), e não de módulos de baixo nível (como banco de dados).

3. Princípio Aberto/Fechado (OCP): Garante a extensibilidade do sistema. Permite adicionar novas funcionalidades (ex: incluir "exames laboratoriais" além de "consultas") sem modificar o código que já está funcionando, utilizando, por exemplo, interfaces para isolar as novas regras de validação.

Você pode conferir mais informações [nesse link](https://github.com/lucilagabriela/projeto-engenharia-de-software-ufrn/blob/main/Principios-de-projetos.md).
