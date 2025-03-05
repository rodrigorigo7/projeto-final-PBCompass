# Sobre Mim

Meu nome é Rodrigo,tenho 19 anos e moro em Vila Lângaro, uma pequena cidade do estado do Rio Grande do Sul. Estou cursando Ciência da Computação na Universidade de Passo Fundo, onde iniciei o terceiro semestre há alguns dias. Minha cor de pele é branca, meu cabelo é loiro e meus olhos são azuis.

# Menções

# Planejamento de Testes

## Nome do Projeto

Projeto Final PB Compass UOL

## Resumo

Projeto da Challenge Final (Sprint 8) do Programa de Bolsas da Compass UOL. Nele serão feitos alguns testes funcionais e serão priorizados testes de perfomances (foco do PB) na API NestJS Cinema https://github.com/juniorschmitz/nestjs-cinema, rodando localmente, no Docker e no EC2 AWS.

## Funcionalidades ou Módulos a serem testados

- Listagem de filmes;  
- Cadastrar novos filmes;  
- Atualizar um filme;  
- Excluir um filme;  
- Criar Ticket;  
- Listar os tickets;  
- Atualizar um ticket;  
- Excluir ticket.  

## Local de Testes

Será utilizada a API NestJS Cinema https://github.com/juniorschmitz/nestjs-cinema, rodando localmente. Além disso, serão usadas  e ferramentas como  Postman,Newman,Miro,GitHub,Jira,Visual Studio Code,Docker e K6.

# Recursos Necessários

- Conexão estável à internet;  
- Docker;  
- Swagger da API;  
- Restante das ferramentas citadas no segmento anterior.  

## Critérios Utilizados 

**DoR**

- Os recursos necessários estarem todos disponíveis e funcionando corretamente;
- Critérios de Aceitação (Acceptance Criteria) definidos;
- A ferramenta de testes (K6) deve estar instalada  ;

**DoD**

- Todos os testes planejados foram executados;  
- Nenhum bug crítico ou bloqueante permanece aberto;  
- Análise de Testes cobrindo as rotas Movies e Tickets;  
- Testes Não Funcionais realizados;  

**Acceptance Criteria**

- CRUD de Cadastro de Filmes implementado (CRIAR,LISTAR,EDITAR E DELETAR);
- Os filmes deverão possuir os campos TITLE, DESCRIPTION, LAUNCHDATE e SHOWTIMES;
- Não deverá ser possível listar, editar ou excluir um filme não cadastrado (inexistente);  
- CRUD de Cadastro de Tickets implementado (CRIAR,LISTAR,EDITAR E DELETAR);  
- Os tickets deverão possuir os campos MOVIEID, USERID, SEATNUMBER,PRICE,SHOWTIME;
- Não deverá ser possível cadastrar um ticket para um filme não cadastrado;
- Não deverá ser possível cadastrar um ticket com um assento fora do intervalo entre 0-99;
- Não deverá ser possível cadastrar um ticket com preço fora do intervalo entre 0-60;  
- Não deverá ser possível listar,editar ou excluir um ticket não cadastrado (inexistente);

## Riscos  
- Falhas no servidor da API;  
- Quedas de Conexão;
- Problemas no ambiente de teste;  
- Documentação com problemas.

## Cronograma 
O cronograma a ser seguido é o cronograma da sprint 08 (Início dia 24/02/2025 e término dia 12/03/2025).  

## Como os Resultados dos Testes Serão Divulgados
Eles serão registrados no GitHub, e apresentados na Challenge do dia 12/03/25,em um tempo  total de 6 minutos.

# Mapas Mentais

## Mapa Mental de Planejamento de Testes

Desenvolvi este mapa mental com foco no planejamento dos testes para a sprint. Ele também está disponível no diretório [MindMaps](MindMaps).

![Mapa Mental](imgs/mapamental.png)

# Testes Candidatos a Automação

- Criação de Filmes;  
- Editar Filmes;  
- Procurar Filme por id;  
- Excluir Filmes;  
- Criar Ticket;  
- Procurar Ticket por id;  
- Editar ticket;  
- Excluir Ticket;  

# Resultados dos Testes Funcionais

Os resultados dos **Testes Funcionais de Caminho Feliz** foram publicados no [**Jira**](https://rodrigorigo.atlassian.net/plugins/servlet/ac/com.soldevelo.apps.test_management/test-cycles?board.id=1&project.key=SCRUM&project.id=10000&board.type=simple). Nele, estão contidos breves explicações sobre o que foi testado, prints, além de resultado (**"Passed"** ou **"Failed"**). Aqui no GitHub, irei adicionar alguns testes funcionais de caminho negativo que fiz para verificar a exeistência de algum bug.

### Post Movies

Ao cadastrar um filme com **data de exibição anterior a data de lançamento** do filme ,a API aceita sem contestações.

![alt text](<imgs/movies/erro-data-post.png>)

Ao cadastrar um filme sem **título ou descrição**, a requisição retorna com erro.

![nada](<imgs/movies/post sem titulos.png>)
![alt text](<imgs/movies/post sem descrição.png>)

### Get Movies

Ao enviar uma requisição **GET com id inexistente**, a API retorna erro.

![alt text](<imgs/movies/getinexist.png>)

### Put Movies

Ao enviar uma requisição **PUT com algum erro no body, ou então com id inexistente**, a requisição falhará e retornará erro.

![alt text](<imgs/movies/put errado.png>)
![alt text](<imgs/movies/putinexistente.png>)

### Delete Movies

Ao tentar **excluir um usuário que não existe**, a requisição falhará,e retornará com mensagem de erro

![alt text](<imgs/movies/deleteinexistente.png>)