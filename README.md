# Listar issues do projecto React 

## Obeservação

conteúdo da tabela esta mocado pois eu atingi o limite de requisições na api do github, caso queiram testar é somente remover os comentários do arquivo [issues.js](./src/redux/reduxSagas/issues.js)

## Recursos que considero importantes em uma tabela de issues seriam

* filtros para encontrar/ analisar as issues
* paginação pois pode existir bastante conteúdo.

## objetivo deste projeto

fazer uma UI para exibir os status dos problemas do projeto React no GitHub, com possibilidade de paginar, filtrar e ver mais detalhes, consumindo a api do [github](https://api.github.com/repos/facebook/react/issues).

<img src="https://static-cms.hotjar.com/images/finding-website_bugs.width-750.png">

## como rodar ?

* Adicionar .env com url do endpoint
  + copie o [.env.example](./.env.example) e remova o .example
* instale as dependências do projeto com `yarn` ou `npm i` .
* rode com o comando `yarn start` ou `npm run start` .

## UI criada para desafio

<img src="./uiPrint.png">

## dependências

* prop-types: biblioteca recomendada pelo próprio react o para documentação das props dos components, tomei a iniciativa de instalar a mesma para documentar meu componentes de forma bem declarativar, uma solução para evitar esta lib é usar Typescript.
* redux: biblioteca para gerenciamento de estado global de aplicações front end, para este cenário pequeno poderia ter sido usado a context Api do react, ela conseguiria tomar conta de todo estado usado no app de forma nativa da lib React .
* react-redux: uma biblioteca para integração do react com redux, apresenta hooks para facilitar os uso do redux.
* redux-saga: biblioteca que faz integração ao react para tratar efeitos colaterais usando redux, um exemplo é uma requisição ajax.

## dependências de desenvolvimento

 * eslint: Para definir um guia de estilo para código e ele ter uma boa legibilidade, escolhi o style guide standard para o projeto pois acho que o código fica mais limpo.

* git-commit-msg-linter: lib para barrar commits fora de padrão [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), escolhi usar para que eu não cometa erro de commitar fora de padrão.
* husky e lint-staged: são libs para automatizar tasks, usei para automatizar execução do lint e de testes.

* nock: lib para interceptar requisições http e poder mockar retornos do endpoints, muito util em testes de integração.
* faker: lib que ter vários dados para usar nos mocks de testes.

## infos sobre endpoint

https://docs.github.com/en/rest/reference/issues#list-repository-issues
https://api.github.com/repos/facebook/react/issues?per_page=2 - ver como saber quantas páginas para navegar

## Desafio

* [x] adicionar redux
* [x] adicionar tabela do semantic ui
* [x] fazer uma ui bonitinha
* [x] exibir dados na tabela 
  + [x] Issue Number 
  + [x] Title
  + [x] Created At
  + [x] Updated At
  + [x] Labels
  + [x] State
* [x] fazer requisição para o endpoint
* [ ] adicionar paginação
* [ ] exibir labels (modal ou collapse)
* [ ] adicionar funcionalide dos filtros
* [x] escrever Readme
  + [x] explicar porque das minhas escolhas
