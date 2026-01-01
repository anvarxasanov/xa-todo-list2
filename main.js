const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    const container = document.querySelector('.js-container');

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const html = `<div>${name}</div> <div>${dueDate}</div> 
        <button class="delete-btn js-delete-btn">Delete</button>`;

        todoListHTML += html;
    });

    container.innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-btn')
        .forEach((deleteBtn, index) => {
            deleteBtn.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            })
        })
}

document.querySelector('.js-add-btn').addEventListener('click', () => {
    addTodo();
});



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