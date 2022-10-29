import todoListForm from "./makeHtml";

class Task {
    constructor(title, description, dueDate, priority, notes, steps) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.steps = steps;
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

const defaultProject = new Project();
const defaultTask = new Task();

todoListForm();