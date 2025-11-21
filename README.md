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
