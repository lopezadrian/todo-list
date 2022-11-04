function capitalizeString (string) {
    const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
}

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
    formInput.required = isRequired;
    formDiv.appendChild(formInput);
}

function makeDropDownList(inputName, labelText, ...options) {
    const todoForm = document.getElementById('todo-form');

    const formDiv = document.createElement('div');
    formDiv.classList.add(inputName);
    todoForm.appendChild(formDiv);

    const formLabel = document.createElement('label');
    formLabel.for = inputName;
    const formLabelText = document.createTextNode(labelText);
    formLabel.appendChild(formLabelText);
    formDiv.appendChild(formLabel);

    const selectList = document.createElement('select');
    selectList.name = inputName;
    selectList.id = inputName;
    formDiv.appendChild(selectList);

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    const defaultOptionText = document.createTextNode('Select option');
    defaultOption.appendChild(defaultOptionText);
    selectList.appendChild(defaultOption);

    for (const option of options) {
        const selectOption = document.createElement('option');
        selectOption.value = option;

        const capitalizedOption = capitalizeString(option);

        const selectOptionText = document.createTextNode(capitalizedOption);
        selectOption.appendChild(selectOptionText);
        
        selectList.appendChild(selectOption);
    }
}

function makeSubmitButton() {
    const todoForm = document.getElementById('todo-form');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.id = 'submit';
    const submitButtonText = document.createTextNode('Submit');
    submitButton.appendChild(submitButtonText);

    todoForm.appendChild(submitButton);
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

    makeDropDownList('priority', 'Task priority', 'high', 'medium', 'low');

    makeSubmitButton();
}

export default todoListForm;