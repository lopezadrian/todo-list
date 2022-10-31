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
/* 
    const titleFormDiv = document.createElement('div');
    titleFormDiv.classList.add('title');
    todoForm.appendChild(titleFormDiv);

    const titleFormLabel = document.createElement('label');
    titleFormLabel.for = 'title';
    titleFormLabel.textContent = 'Task';
    titleFormDiv.appendChild(titleFormLabel);

    const titleFormInput = document.createElement('input');
    titleFormInput.type = 'text';
    titleFormInput.id = 'title';
    titleFormInput.name = 'title';
    titleFormInput.required = true;
    titleFormDiv.appendChild(titleFormInput);
    

    const descriptionFormDiv = document.createElement('div');
    titleFormDiv.classList.add('description');
    todoForm.appendChild(descriptionFormDiv);

    const descriptionFormLabel = document.createElement('label');
    descriptionFormLabel.for = 'description';
    descriptionFormLabel.textContent = 'Description';
    descriptionFormDiv.appendChild(descriptionFormLabel);

    const descriptionFormInput = document.createElement('input');
    descriptionFormInput.type = 'text';
    descriptionFormInput.id = 'description';
    descriptionFormInput.name = 'description';
    descriptionFormInput.required = true;
    descriptionFormDiv.appendChild(descriptionFormInput);


    const dueDateFormDiv = document.createElement('div');
    dueDateFormDiv.classList.add('dueDate');
    todoForm.appendChild(dueDateFormDiv);

    const dueDateFormLabel = document.createElement('label');
    dueDateFormLabel.for = 'dueDate';
    dueDateFormLabel.textContent = 'Due date';
    dueDateFormDiv.appendChild(dueDateFormLabel);

    const dueDateFormInput = document.createElement('input');
    dueDateFormInput.type = 'date';
    dueDateFormInput.id = 'dueDate';
    dueDateFormInput.name = 'dueDate';
    dueDateFormInput.required = true;
    dueDateFormDiv.appendChild(dueDateFormInput); */
}

export default todoListForm;