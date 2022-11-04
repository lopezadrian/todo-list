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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDdEczQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21ha2VIdG1sLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nIChzdHJpbmcpIHtcbiAgICBjb25zdCBjYXBpdGFsaXplZFN0cmluZyA9IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICByZXR1cm4gY2FwaXRhbGl6ZWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ha2VGb3JtRGl2KGlucHV0TmFtZSwgaW5wdXRUeXBlLCBsYWJlbFRleHQsIGlzUmVxdWlyZWQpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoaW5wdXROYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZm9ybUxhYmVsLmZvciA9IGlucHV0TmFtZTtcbiAgICBjb25zdCBmb3JtTGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWxUZXh0KTtcbiAgICBmb3JtTGFiZWwuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsVGV4dCk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICBmb3JtSW5wdXQuaWQgPSBpbnB1dE5hbWU7XG4gICAgZm9ybUlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgZm9ybUlucHV0LnJlcXVpcmVkID0gaXNSZXF1aXJlZDtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1JbnB1dCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VEcm9wRG93bkxpc3QoaW5wdXROYW1lLCBsYWJlbFRleHQsIC4uLm9wdGlvbnMpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoaW5wdXROYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2KTtcblxuICAgIGNvbnN0IGZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZm9ybUxhYmVsLmZvciA9IGlucHV0TmFtZTtcbiAgICBjb25zdCBmb3JtTGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobGFiZWxUZXh0KTtcbiAgICBmb3JtTGFiZWwuYXBwZW5kQ2hpbGQoZm9ybUxhYmVsVGV4dCk7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtTGFiZWwpO1xuXG4gICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNlbGVjdExpc3QubmFtZSA9IGlucHV0TmFtZTtcbiAgICBzZWxlY3RMaXN0LmlkID0gaW5wdXROYW1lO1xuICAgIGZvcm1EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdCk7XG5cbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZGVmYXVsdE9wdGlvbi52YWx1ZSA9ICcnO1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1NlbGVjdCBvcHRpb24nKTtcbiAgICBkZWZhdWx0T3B0aW9uLmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb25UZXh0KTtcbiAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKGRlZmF1bHRPcHRpb24pO1xuXG4gICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICBjb25zdCBzZWxlY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc2VsZWN0T3B0aW9uLnZhbHVlID0gb3B0aW9uO1xuXG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkT3B0aW9uID0gY2FwaXRhbGl6ZVN0cmluZyhvcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdE9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXBpdGFsaXplZE9wdGlvbik7XG4gICAgICAgIHNlbGVjdE9wdGlvbi5hcHBlbmRDaGlsZChzZWxlY3RPcHRpb25UZXh0KTtcbiAgICAgICAgXG4gICAgICAgIHNlbGVjdExpc3QuYXBwZW5kQ2hpbGQoc2VsZWN0T3B0aW9uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VTdWJtaXRCdXR0b24oKSB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU3VibWl0Jyk7XG4gICAgc3VibWl0QnV0dG9uLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvblRleHQpO1xuXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG5cbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5pZCA9ICd0b2RvLWZvcm0nXG4gICAgdG9kb0Zvcm0uYWN0aW9uID0gJyc7XG4gICAgdG9kb0Zvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuICAgIHRvZG9Gb3JtLm9uc3VibWl0ID0gJ3JldHVybiBmYWxzZSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICBtYWtlRm9ybURpdigndGl0bGUnLCAndGV4dCcsICdUYXNrJywgdHJ1ZSk7XG5cbiAgICBtYWtlRm9ybURpdignZGVzY3JpcHRpb24nLCAndGV4dCcsICdEZXNjcmlwdGlvbicsIHRydWUpO1xuICAgIFxuICAgIG1ha2VGb3JtRGl2KCdkdWVEYXRlJywgJ2RhdGUnLCAnRHVlIGRhdGUnLCB0cnVlKTtcblxuICAgIG1ha2VGb3JtRGl2KCdwcmlvcml0eScsICd0ZXh0JywgJ1ByaW9yaXR5JywgZmFsc2UpO1xuXG4gICAgbWFrZUZvcm1EaXYoJ25vdGVzJywgJ3RleHQnLCAnTm90ZXMnLCBmYWxzZSk7XG5cbiAgICBtYWtlRm9ybURpdignc3RlcHMnLCAndGV4dCcsICdTdGVwcycsIGZhbHNlKTtcblxuICAgIG1ha2VEcm9wRG93bkxpc3QoJ3ByaW9yaXR5JywgJ1Rhc2sgcHJpb3JpdHknLCAnaGlnaCcsICdtZWRpdW0nLCAnbG93Jyk7XG5cbiAgICBtYWtlU3VibWl0QnV0dG9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0Rm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RvTGlzdEZvcm0gZnJvbSBcIi4vbWFrZUh0bWxcIjtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0ZXBzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuY29uc3QgZGVmYXVsdFRhc2sgPSBuZXcgVGFzaygpO1xuXG50b2RvTGlzdEZvcm0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=