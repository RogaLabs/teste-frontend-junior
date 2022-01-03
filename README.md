# Music Player

## Requisitos

- Node.js v12 ou mais recente
- Yarn

## Passo 1

- Rodar o comando `yarn`
- Ver o teste "quebrar" rodando `yarn test`
- Escrever as classes para passar nos testes

## Passo 2

- Criar a interface baseada no [protótipo do Figma](https://www.figma.com/file/V2LUvZCm5AW92nCjtCcM8A/Music-Player?node-id=0%3A1)
- Fazer a aplicação responsiva utilizando as classes criadas no passo anterior
- Não utilizar biblioteca de terceiros (apenas vanilla js)
- Utilizar [Import Maps](https://wicg.github.io/import-maps/) para gerênciar os scripts e estilos do projeto (já configurado no projeto via [es-module-shims](https://github.com/guybedford/es-module-shims))
  - Adicionar CSS usando [adoptedStyleSheets](https://developers.google.com/web/updates/2019/02/constructable-stylesheets) (ver arquivo `index.js`)
  - Usar imports relativos (opcional -- ver index.js e index.json)
- Testar usando os comandos `yarn dev` e `yarn serve`

## Dicas

- Utilizar os recursos mais novos de JavaScript (ESNext)
- Encapsular as propriedades das classes (impedir valores inválidos em atribuições diretas)

## O que será avaliado

- Todos os testes cumpridos
- Estrutura do código
- Uso de boas práticas (legibilidade, código limpo, etc)

## Resultado experado

<img src="./player.png" width=320 />
