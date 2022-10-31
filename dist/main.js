/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/makeHtml.js":
/*!*************************!*\
  !*** ./src/makeHtml.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListForm);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeHtml */ "./src/makeHtml.js");


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

(0,_makeHtml__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDeEYzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21ha2VIdG1sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWtlRm9ybURpdihpbnB1dE5hbWUsIGlucHV0VHlwZSwgbGFiZWxUZXh0KSB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKGlucHV0TmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5cbiAgICBjb25zdCBmb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1MYWJlbC5mb3IgPSBpbnB1dE5hbWU7XG4gICAgY29uc3QgZm9ybUxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGxhYmVsVGV4dCk7XG4gICAgZm9ybUxhYmVsLmFwcGVuZENoaWxkKGZvcm1MYWJlbFRleHQpO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsKTtcblxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybUlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgZm9ybUlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgIGZvcm1JbnB1dC5uYW1lID0gaW5wdXROYW1lO1xuICAgIGZvcm1JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdEZvcm0oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gJ3RvZG8tZm9ybSdcbiAgICB0b2RvRm9ybS5hY3Rpb24gPSAnJztcbiAgICB0b2RvRm9ybS5tZXRob2QgPSAncG9zdCc7XG4gICAgdG9kb0Zvcm0ub25zdWJtaXQgPSAncmV0dXJuIGZhbHNlJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgIG1ha2VGb3JtRGl2KCd0aXRsZScsICd0ZXh0JywgJ1Rhc2snKTtcblxuICAgIG1ha2VGb3JtRGl2KCdkZXNjcmlwdGlvbicsICd0ZXh0JywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgXG4gICAgbWFrZUZvcm1EaXYoJ2R1ZURhdGUnLCAnZGF0ZScsICdEdWUgZGF0ZScpO1xuLyogXG4gICAgY29uc3QgdGl0bGVGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVGb3JtRGl2KTtcblxuICAgIGNvbnN0IHRpdGxlRm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUZvcm1MYWJlbC5mb3IgPSAndGl0bGUnO1xuICAgIHRpdGxlRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2snO1xuICAgIHRpdGxlRm9ybURpdi5hcHBlbmRDaGlsZCh0aXRsZUZvcm1MYWJlbCk7XG5cbiAgICBjb25zdCB0aXRsZUZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVGb3JtSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUZvcm1JbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVGb3JtSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVGb3JtSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIHRpdGxlRm9ybURpdi5hcHBlbmRDaGlsZCh0aXRsZUZvcm1JbnB1dCk7XG4gICAgXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZvcm1EaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Gb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uRm9ybUxhYmVsLmZvciA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25Gb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uRm9ybURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZvcm1MYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25Gb3JtSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBkZXNjcmlwdGlvbkZvcm1JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25Gb3JtSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25Gb3JtSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGRlc2NyaXB0aW9uRm9ybURpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZvcm1JbnB1dCk7XG5cblxuICAgIGNvbnN0IGR1ZURhdGVGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZUZvcm1EaXYuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVGb3JtRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVGb3JtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVGb3JtTGFiZWwuZm9yID0gJ2R1ZURhdGUnO1xuICAgIGR1ZURhdGVGb3JtTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIGRhdGUnO1xuICAgIGR1ZURhdGVGb3JtRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVGb3JtTGFiZWwpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUZvcm1JbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGR1ZURhdGVGb3JtSW5wdXQuaWQgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZUZvcm1JbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xuICAgIGR1ZURhdGVGb3JtSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGR1ZURhdGVGb3JtRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVGb3JtSW5wdXQpOyAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b2RvTGlzdEZvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9kb0xpc3RGb3JtIGZyb20gXCIuL21ha2VIdG1sXCI7XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBzdGVwcykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB9XG59XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoKTtcbmNvbnN0IGRlZmF1bHRUYXNrID0gbmV3IFRhc2soKTtcblxudG9kb0xpc3RGb3JtKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9