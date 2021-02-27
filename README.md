- 1 - Introdução

- O que é ?
- Estrutura Básica de Pastas
- Snippets e plugins
- Arquivos Principais

  - App (estilo arquivo externo)
  - index (Render root no html)

- npx create-react-app

- 2 - Header

- Estrutura Básica

  - imports
  - component (props)
    - style (estilo básico)
    - return (retorno deve ser único)
  - defaultProps
  - propTypes (TypeScript)
  - export

- 3 - Container

- Revisão (Estrutura Básica)
- Explicar children

- 4 - Button

- Revisão (Estrutura Básica)
- Eventos (click - criar função no App - console)

- 5 - Task

- Revisão (Estrutura Básica)
- npm i styled-components react-icons
- https://react-icons.github.io/react-icons/
- Estilos com Styled Components

  - 5.1 - Task

  - Ícones com React Icons
  - Estilos com Styled Components + Estilo Básico

  - 5.2 Task - TaskItem

  - import do component TaskItem
  - Renderização de Task em Tasks com map
  - Criar mock em App (fazer como props na primeira vez)
    - UseState (O que é ? Como usar ?)

- 6 - Task

  - Ícone Delete (mostrar forma de passar o evento de click de App até Task - console)

- 7 - Refatoração 1 (remover mock do App e criar context)

  - UseContext (O que é ? Como usar ?)
  - Colocar mock no Tasks context
  - Utilizar o Tasks context dentro do component Tasks
  - Utilizar o provider dentro de App

- 8 - Refatoração 2 (tornar o context um hook personalizado)

  - Arrumar Task context para se tornar um hook
  - Pegar o hook no Tasks component
  - Criar a função de deletar Task em Tasks e passar para Task component como propriedade
  - Arrumar o Tasks com conditional rendering (O que é ? Como usar ?)
    - Arrumar para aplicar estilo na div (container) e colocar opção de ul ou h2

- 9 - Task Counter

  - Contador de Task para mostrar o compartilhamento do contexto/estado por propriedade (Tasks)

- 10 - Estilo para Lembrete de Tarefas importantes

  - Nova função dentro de Tasks que vai passar para Task
    - Função vai mudar somente a propriedade reminder da Task (Como?)

- 11 - Add Task

  - Fazer uma primeira versão simplificada para explicar useRef (O que é ? Como usar ?)
  - Demonstrar reutilização de componentes utilizando Button em Add Task

  - 11.1 - Input

    - Reutilização do componente em Add Task

  - 11.2 - Checkbox

    - Dica de estilização simples de checkbox com css filter

- 12 - Dica imports absolutos (jsconfig.json)

  - https://create-react-app.dev/docs/importing-a-component/

- 13 - Refatoração 3 (Pages)

  - Arrumar a aplicação com react router (O que é ? Como usar ?)
  - PageAddTask
  - PageTasks
  - Fazer um exemplo de como pegar parâmetros da url

- 14 - Dica json-server

  - Criar API que retorne Tasks para renderizar no app

- 15 - Obter as Tasks da API
  - useEffect (O que é ? Como usar ?)

Utilizar router para criar pagina de add
https://www.youtube.com/watch?v=2jPuoLD--Us&list=PLv2oOZboUtKMMszyFDrMz-cVs4pKqDssM&index=4&ab_channel=ViniciusDacal
Mostrar compartilhamento do contexto/estado no import do hook personalziado
https://www.youtube.com/watch?v=t2ypzz6gJm0&ab_channel=WebDevSimplified
Forwarding Refs

```bash
npm i styled-components react-icons
npm i react-icons
npm i uuid
npm i react-router-dom
```
