const todoList = [
/*     {
        name: '',
        dueDate: ''
    }, */
/*     {
        name: 'wash dishes',
        dueDate: '26-11-2025'
    },
    {
        name: 'watch youtube',
        dueDate: '25-11-2025'
    } */
];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    const container = document.querySelector('.js-container');

    for (let i = 0; i < todoList.length; i += 1) {
        const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        // const name = todoObject.name; 
        // const date = todoObject.dueDate;
        const html = `<div>${name}</div> <div>${dueDate}</div> 
        <button class="delete-btn" onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>`;

        todoListHTML += html;
    }
    container.innerHTML = todoListHTML;
}




function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-date-input');
    const dueDate = dateInputElement.value


    todoList.push({
        name, //name: name,
        dueDate //dueDate: duedate
    });
    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}