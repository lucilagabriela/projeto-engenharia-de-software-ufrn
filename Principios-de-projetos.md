## Tarefa 3

### Adicione ao seu repositório um relatório de como os **princípios de projeto** e quais deles podem ser utilizados no seu projeto, por exemplo com base nos User Stories e nos diagramas UML escolhidos.
### Adicione um Pull Request com @mvapedrosa como Assignee de develop/dev para main/master com as adições ao projeto.
---
Os **Princípios de Projeto** ajudam, em um desenvolvimento de software, a alcançar propriedades importantes de um *bom projeto*, que são a:
1. Integridade Conceitual

O sistema deve apresentar uma visão unificada e consistente em todas as suas partes. Isso se aplica desde a interface do usuário (ex: botões de "sair" idênticos em todas as telas) até o código (ex: padronização de nomes de variáveis). Um sistema com integridade conceitual é mais fácil de entender, implementar e manter.

2. Ocultamento de Informação, ou Encapsulamento

As classes devem esconder seus detalhes internos de implementação, especialmente aqueles que podem mudar. Elas devem expor apenas uma interface pública e estável. Isso permite que a estrutura interna de uma classe evolua sem impactar as partes do sistema que a utilizam.

3. Coesão

Um módulo (como uma classe ou método) deve ter uma única responsabilidade ou oferecer um único serviço bem definido.

4. Acoplamento

Mede o grau de dependência entre as classes. O objetivo não é eliminar todo o acoplamento, mas garantir que ele seja "bom" ou "aceitável". Um acoplamento aceitável ocorre quando uma classe A depende de uma classe B por meio de sua interface estável para obter um serviço útil.

---
#### E os *Princípios de Projeto* são:
1. Princípio da Responsabilidade Única (SRP)

Diretamente ligado à *Coesão*, afirma que uma classe deve ter apenas uma razão para mudar. Por exemplo, uma classe não deve ser responsável por calcular um dado de negócio e, ao mesmo tempo, por imprimi-lo na tela. 

2. Princípio da Segregação de Interfaces (ISP)

Também relacionado à *Coesão*, propõe que interfaces devem ser pequenas e específicas para cada tipo de cliente, em vez de monolíticas.  Clientes não devem ser forçados a depender de métodos que não usam.

3. Princípio da Inversão de Dependências (DIP), ou Prefira Interfaces a Classes

Visa diminuir o *Acoplamento*. A recomendação é depender de abstrações (interfaces) em vez de implementações concretas (classes). Isso torna o sistema mais flexível, permitindo, por exemplo, que um "ControleRemoto" opere com qualquer "TVGenerica" (uma interface) em vez de estar acoplado a uma "TVSamsung" (uma classe específica).

4. Princípio Aberto/Fechado (OCP)

Uma classe deve estar "aberta para extensão, mas fechada para modificação". Ou seja, deve ser possível adicionar novas funcionalidades sem alterar o código-fonte existente, por exemplo, através do uso de herança, parâmetros ou padrões de projeto.

5. Princípio de Demeter (Lei do Menor Conhecimento)

Relacionado ao *Ocultamento de Informação*, sugere que se evitem longas cadeias de chamadas de métodos (ex: a.getB().getC().fazerAlgo()). Tais cadeias quebram o encapsulamento e acoplam o código a toda a estrutura interna de múltiplos objetos.

6. Princípio da Substituição de Liskov (LSP)

Este princípio, nomeado em homenagem à professora Barbara Liskov, estabelece boas práticas para o uso de herança, focando na maneira como os métodos são redefinidos nas subclasses.
Uma classe derivada (subclasse) deve poder substituir sua classe base sem quebrar o programa. Essencialmente, se o seu código funciona com um objeto da classe mãe, ele também deve funcionar com um objeto da classe filha, e a classe filha não pode enfraquecer as garantias ou comportamentos da mãe.

7. Prefira Composição a Herança

A ideia central do princípio "Prefira Composição a Herança" é a de que nem sempre a herança é a melhor solução para o reúso de código, sendo frequentemente uma alternativa mais flexível e robusta a composição. Enquanto a herança cria uma forte relação "é-um" , considerada um reúso "caixa-branca" que pode gerar alto acoplamento , a composição modela uma relação "possui". Essa abordagem é vista como um reúso "caixa-preta", promovendo melhor encapsulamento, pois uma classe utiliza outra apenas por sua interface pública, sem depender de detalhes de implementação internos.

---

#### Para o nosso projeto, identificamos que 3 **Princípios de Projeto** se encaixam melhor em nossa aplicação.
1. Princípio da Responsabilidade Única (SRP)

Evita a criação de classes genéricas e inespecíficas para o projeto de software. Se caso precise alterar uma funcionalidade do sistema, como o agendamento, não correrá o risco de quebrar outra funcionalidade, como o de cadastro de usuário, pois elas estarão em classes separadas.

2. Princípio da Inversão de Dependências (DIP)

Este princípio é fundamental para criar um sistema desacoplado, flexível e, principalmente, testável. Ele diz que módulos de alto nível (sua regra de negócio) não devem depender de módulos de baixo nível (banco de dados, envio de e-mails), mas sim de abstrações (interfaces).

3. Princípio Aberto/Fechado (OCP)

Este princípio garante que seu sistema possa crescer sem que precise modificar o código que já funciona.
Imagine que, no futuro, além de "consultas", a clínica queira agendar "exames laboratoriais", que têm regras diferentes (ex: exigem preparo prévio). Seu ServicoDeAgendamento deve estar "aberto" para adicionar novos tipos de agendamento, mas "fechado" para modificação.
Isso pode ser feito criando uma interface TipoDeAgendamento com um método validar(). As classes Consulta e ExameLaboratorial implementariam essa interface, cada uma com sua regra de validação. O serviço de agendamento usaria a interface sem precisar saber qual tipo de agendamento está sendo processado.
