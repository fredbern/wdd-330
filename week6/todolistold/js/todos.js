import utils from './utils.js';
import ls from './ls.js';
// On click handler
document.querySelector("#addBtn").onclick= addNewTodo;
document.querySelector("#activeFilter").onclick= applyFilter;
document.querySelector("#allFilter").onclick= applyFilter;
document.querySelector("#completedFilter").onclick= applyFilter;
// get input
const input = document.querySelector('#todoInput');
// add on Enter
input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false};

    if (todo.content != '') {
        const todoItem = createTodoItem(todo);
        alert('task added');
        ls.saveTodo(todo);
        input.value = '';
    }
    
    loadTodos();
}

function createTodoItem(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = toggleComplete;

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addTodoList(todoDiv) {
    // add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    document.querySelector('#todos').innerHTML='';
    const todoList = ls.getTodoList();
    // debugging
    // console.log(todoList);
    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    })

}

function deleteTodo(e) {
        document.querySelector('#todos').innerHTML='';
        const id = e.target.getAttribute('data-id');
        ls.deleteTodo(id)
        loadTodos();
    }


function toggleComplete(e) {
        const ids = e.target.getAttribute('data-id');

        if (e.target.innerText == '') 
        {
            e.target.innerText = '✔️'
            ls.changeBoolean(ids)
        } else {
            e.target.innerText = ''
        }
    }
function applyFilter(e) {
    document.querySelector('#todos').innerHTML = '';

    let filteredTodos = [];

    const allTodos = ls.getTodoList();

    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter') {
        allTodos.forEach(todo => {
            const el = createTodoItem(todo)
            addTodoList(el);
        })
    } else if (e.currentTarget.id == 'completedFilter') {
        filteredTodos = utils.completedFilter(allTodos);
    }
}
