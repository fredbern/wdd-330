import utils from './utils.js';
import ls from './ls.js';
// On click handler
document.querySelector("#addBtn").onclick= addNewTodo;
// get input
const input = document.querySelector('#todoInput');
// add on Enter
input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false};
    // reset the input field
    input.value = '';
    // add to the UI
    const todoItem = createTodoItem(todo);
    // save to localStorage
    console.log()
    ls.saveTodo(todo);
    
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
    console.log(todoList)

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    })

}

function deleteTodo(e) {
    document.querySelectorAll('.todo').forEach(item => {
        item.addEventListener('click', event => {
            const x = item.id;
            console.log(x)
            
            })
        })
}