
let todolist = [ { item: 'buy milk',
     dueDate: '2023-10-15' },
    { item: 'go to gym',
    dueDate: '2023-10-16' } ];
displayTodos();

function addTodo() {
     let todoElement = document.getElementById('todo-input');
     let dueDateElement = document.getElementById('due-date'); 
    let todoItem = todoElement.value;
    let dueDate = dueDateElement.value;
    todolist.push({ item: todoItem, dueDate: dueDate });
    todoElement.value = '';
        dueDateElement.value = '';
    displayTodos();
}

function displayTodos() {
    const itemsContainer = document.getElementById('todo-container');

    let newHtml = '';



    itemsContainer.innerText = '';
    for (let i = 0; i < todolist.length; i++) {
        let titem= todolist[i].item;
        let dueDate = todolist[i].dueDate;
        newHtml += `
        <div>
        <span class="todo-text"> ${titem}  </span>
        <span class="todo-date"> (Due: ${dueDate}) </span>
        <button class="delete-btn" onclick="todolist.splice(${i} , 1 );
        displayTodos();">Delete</button>
        <button class="edit-btn" onclick="editTodo(${i})">Edit</button>
        </div>
        `;

    
    }
           itemsContainer.innerHTML = newHtml;


}