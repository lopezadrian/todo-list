function makeFormDiv(inputName, inputType, labelText, isRequired) {
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

function makeDropDownList() {

}

function todoListForm() {
    const content = document.querySelector('#content')

    const todoForm = document.createElement('form');
    todoForm.id = 'todo-form'
    todoForm.action = '';
    todoForm.method = 'post';
    todoForm.onsubmit = 'return false';
    content.appendChild(todoForm);

    makeFormDiv('title', 'text', 'Task', true);

    makeFormDiv('description', 'text', 'Description', true);
    
    makeFormDiv('dueDate', 'date', 'Due date', true);

    makeFormDiv('priority', 'text', 'Priority', false);

    makeFormDiv('notes', 'text', 'Notes', false);

    makeFormDiv('steps', 'text', 'Steps', false);

    makeDropDownList();
}

export default todoListForm;