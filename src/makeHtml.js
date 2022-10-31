function makeFormDiv(inputName, inputType, labelText) {
    const todoForm = document.getElementById('todo-form');

    const formDiv = document.createElement('div');
    formDiv.classList.add(inputName);
    todoForm.appendChild(formDiv);

    const formLabel = document.createElement('label');
    formLabel.for = inputName;
    const formLabelText = document.createTextNode(labelText);
    formLabel.appendChild(formLabelText);
    formDiv.appendChild(formLabel);

    const formInput = document.createElement('input');
    formInput.type = inputType;
    formInput.id = inputName;
    formInput.name = inputName;
    formInput.required = true;
    formDiv.appendChild(formInput);
}

function todoListForm() {
    const content = document.querySelector('#content')

    const todoForm = document.createElement('form');
    todoForm.id = 'todo-form'
    todoForm.action = '';
    todoForm.method = 'post';
    todoForm.onsubmit = 'return false';
    content.appendChild(todoForm);

    makeFormDiv('title', 'text', 'Task');

    makeFormDiv('description', 'text', 'Description');
    
    makeFormDiv('dueDate', 'date', 'Due date');

    makeFormDiv('priority', 'text', 'Priority')
}

export default todoListForm;