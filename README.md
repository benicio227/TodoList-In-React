# Todo-List-React
**This is a todo-list web application created with ReactJS. It allows you to create everyday tasks, mark them as completed and remove them.**
(Esse é um aplicativo web de um todo-list criado com ReactJS. Ele permite a criação de tarefas cotidianas, marca-las como concluídas e a remoção delas.)
## Functionality (Funcionalidades)
- **Add new task** (Adicionar nova tarefa)
- **Mark a task as completed** (Marcar uma tarefa como concluída)
- **Remove a task from the list** (Remover uma tarefa da lista)

## Technologies used (Tecnologias usadas)
- [**React**](https://reactjs.org/) (v18.2.0): React is a Javascript library for building user interfaces.
- [React DOM](https://reactjs.org/docs/react-dom.html) (v18.2.0): A package that provides DOM-specific methods for React.
- **HTML/CSS**
- **Javascript**

**Description of the purpose of each technology used in the project**: (Descrição da finalidade de cada tecnologia utilizada no projeto)
- **React**: Used as the main library for developing the project's user interface. It offers an efficient way to build reusable and interactive components.
(Utilizada como biblioteca principal para desenvolvimento da interface de usuário do projeto. Ele oferece uma maneira eficiente de construir componentes reutilizáveis e interativos)
- **React DOM**: Responsible for manipulating the DOM and rendering the React components on the web page.
(Responsável por manipular o DOM e renderizar os componentes React na página web)
- **Module CSS**: CSS Modules are a CSS styling approach where the scope of classes is limited to the specific component in which they are being used. This avoids class name conflicts and helps maintain CSS code organization and modularity in larger projects.

## Pre-requisites (Pré-requisitos)
- **Node.js installed** (Node.js instalado)
- **npm (or yarn) installed** (npm ou yarn instalado)

## Installation (Instalação)
Note: This project uses `styled-components` for styling

(Nota: Esse projeto usa `modulo.css` para estilizar)
1. **Clone this repository on your machine: `git clone git@github.com:benicio227/task-manager-.git`** (Clone esse repositório em sua máquina)
2. **Navigate to the project directory**: `cd project-name` (Navegue até o diretório do projeto)
3. **Install the dependencies**: `npm install` or `yarn install` (Instale as dependências)

## How to use (Como usar)
1. **Start the development server**: `npm start` or `yarn start` (Inicie o servidor de desenvolvimento)
2. **Open your browser and access**: `http://localhost:3000` (Abra seu navegador e acesse)

### Code Explanation (Explicação do código)
Below I will explain the main features of this project. (Abaixo explicarei as principais funcionalidades desse projeto.)

```javascript
  const addTask = (newTask) => {   
    setTasks([...tasks, newTask]);
  }
```
**In the code above we have a function called "addTask" that receives a parameter named "newTask". It is used to add a new task to the existing task list in a state called "tasks"**.
(No código acima temos uma função chamada "addTask" que recebe um parâmetro de nome "newTask". Ela é usada para adicionar uma nova tarefa à lista de tarefas existente em um estado chamado "tasks".)

```javascript
setTasks([...tasks, newTask])
```
**The line of code above is updating the "tasks" state with the value that will be entered in the input by the user**.
(A linha de código acima está atualizando  o estado "tasks" com o valor que será digitado no input pelo usuário.)

**The new value is created using the spread operator, which will copy all existing elements in the task list "tasks" and will add the new value "newTask" at the end of the array represented by the state "tasks".**
(O novo valor é criado usando o operador de spread,  na qual irá copiar todos os elementos existentes na lista de tarefas "tasks" e irá adicionar o novo valor "newTask" no final do array representado pelo estado "tasks")

```javascript
  const increaseTask = () => {
    setIncreasedTask(prevIncreasedTask => prevIncreasedTask + 1);
  }
```
**This code defines a function called increaseTask that is used to increase the number of tasks. (Esse código define uma função chamada increaseTask que é usada para aumentar o número de tarefas)**

```javascript
setIncreasedTask(prevIncreasedTask => prevIncreasedTask + 1);
```
**This line updates the increasedTask state with a new value. The new value is calculated using the state update function, which takes the previous state as an argument (prevIncreasedTask) and returns a new value, which is the previous state incremented by 1.**

(Esta linha atualiza o estado increasedTask com um novo valor. O novo valor é calculado usando a função de atualização do estado, que recebe o estado anterior como argumento (prevIncreasedTask) e retorna um novo valor, que é o estado anterior incrementado em 1).

```javascript
    const handleCreateTask = () => {
        if (taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
            addIncreasedTask()
        }
    };
```
**This code snippet defines a function called handleCreateTask that is called when the user tries to create a new task.**
(Esse trecho de código define uma função chamada handleCreateTask que é chamada quando o usuário tenta criar uma nova tarefa).

```javascript
if (taskText.trim() !== '')
```
**This line checks that the task text (taskText) is not empty after removing whitespace at the beginning and end using the trim() method. This ensures that the user is not trying to add an empty task.**
(Esta linha verifica se o texto da tarefa (taskText) não está vazio após remover espaços em branco no início e no final usando o método trim(). Isso garante que o usuário não está tentando adicionar uma tarefa vazia.)

```javascript
 addTask(taskText);
```
**In this line I am passing the new task "newTask" as an argument to the addTask function which will update the state of the task array with the new task.**
(Nessa linha estou passando a nova tarefa "newTask" como argumento para afunção addTask que atualizará o estado do array de tarefas com a nova tarefa).

```javascript
setTaskText('');
```
**This line resets the "taskText" state to an empty string, clearing the input field where the user entered the task text.**
(Essa linha redefine o estado "taskText" para uma string vazia, limpando o campo de entrada onde o usuário digitou o texto da tarefa).

```javascript
addIncreasedTask()
```
**This line calls the addIncreasedTask function, which is defined to increase the total number of tasks.**
(Esta linha chama a função addIncreasedTask, que foi definida para aumentar o número total de tarefas).

## Contributions (Contribuições)
**This project is open to contributions. If you want to contribute to this project, follow these steps:**

(Este projeto está aberto à contribuições. Se você deseja contribuir para este projeto, siga estes passos:)
1. **Fork the repository** (Fork do repositório)
2. **Create a branch for your feature: `git checkout -b my-feature`** (Crie uma ramificação para sua feature)
3. **Commit your changes: `git commit -m 'Add new feature'`** (Confirme suas alterações)
4. **Upload to remote repository: `git push origin minha-feature`** (Envie para o repositório remoto)
5. **Open a pull request** (Abra uma solicitação pull)

## License

**This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for more details.**

(Este projeto está licenciado sob a licença MIT - consulte o arquivo <a href="LICENSE.md">LICENSE.md</a> para obter mais detalhes.)
