const TODO_LIST = 'todoList';

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST)

    let todoList = []

    if (todoListString) {
        todoList = JSON.parse(todoListString)
    }

    return todoList;
}

function saveTodo(todo) {
    let todoList = getTodoList();
    todoList.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
}

function changeBoolean(ids) {
    const todoList = getTodoList();
    //console.log(todoList)
    let upList = todoList.filter(todo => todo.id == ids);
    //console.log(upList)
    const findIndex = todoList.map(function(a) {
         return a.id;
       }).indexOf(upList[0].id);

    console.log(todoList[findIndex])
    let id = Number(ids)
    let True = {id, content: upList[0].content, completed: true}
    let False = {id, content: upList[0].content, completed: false}
    
    if (False) {
         console.log('FALSE')
         todoList[findIndex] = {id, content: upList[0].content, completed: true}
        //localStorage.setItem(todoList[findIndex], True)
    //     //localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
    } else if (True) {
         console.log('TRUE')
         todoList[findIndex] = {id, content: upList[0].content, completed: false}
    //     //localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
    }
    
}   

function deleteTodo(id) {
    const todoList = getTodoList();
    let updatedList = todoList.filter(todo => todo.id != id);
    localStorage.setItem(TODO_LIST, JSON.stringify(updatedList))
}

// function complete(id) {
//     const todoList = getTodoList();

//     let updatedList = todoList.filter(todo => todo.id != id);
    
//     localStorage.setItem(TODO_LIST, JSON.stringify(updatedList))
// }


export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    changeBoolean
}
