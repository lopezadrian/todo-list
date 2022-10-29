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
    const todoForm = document.querySelector('#todo-form');

    const formDiv = document.createElement('div');
    formDiv.classList.add(inputName);
    todoForm.appendChild(titleFormDiv);

    const formLabel = document.createElement('label');
    formLabel.for = inputName;
    const formLabelText = document.createTextNode(labelText);
    formLabel.appendChild(formLabelText);
    formDiv.appendChild(titleFormLabel);

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

    makeFormDiv(todoForm, 'title', 'text', 'Task');


/*     const titleFormDiv = document.createElement('div');
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
    todoForm.appendChild(ddueDateFormDiv);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7VUNyRjNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFrZUh0bWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1ha2VGb3JtRGl2KGlucHV0TmFtZSwgaW5wdXRUeXBlLCBsYWJlbFRleHQpIHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKTtcblxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoaW5wdXROYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUZvcm1EaXYpO1xuXG4gICAgY29uc3QgZm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmb3JtTGFiZWwuZm9yID0gaW5wdXROYW1lO1xuICAgIGNvbnN0IGZvcm1MYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShsYWJlbFRleHQpO1xuICAgIGZvcm1MYWJlbC5hcHBlbmRDaGlsZChmb3JtTGFiZWxUZXh0KTtcbiAgICBmb3JtRGl2LmFwcGVuZENoaWxkKHRpdGxlRm9ybUxhYmVsKTtcblxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZm9ybUlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgZm9ybUlucHV0LmlkID0gaW5wdXROYW1lO1xuICAgIGZvcm1JbnB1dC5uYW1lID0gaW5wdXROYW1lO1xuICAgIGZvcm1JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdEZvcm0oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmlkID0gJ3RvZG8tZm9ybSdcbiAgICB0b2RvRm9ybS5hY3Rpb24gPSAnJztcbiAgICB0b2RvRm9ybS5tZXRob2QgPSAncG9zdCc7XG4gICAgdG9kb0Zvcm0ub25zdWJtaXQgPSAncmV0dXJuIGZhbHNlJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgIG1ha2VGb3JtRGl2KHRvZG9Gb3JtLCAndGl0bGUnLCAndGV4dCcsICdUYXNrJyk7XG5cblxuLyogICAgIGNvbnN0IHRpdGxlRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRm9ybURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRm9ybURpdik7XG5cbiAgICBjb25zdCB0aXRsZUZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVGb3JtTGFiZWwuZm9yID0gJ3RpdGxlJztcbiAgICB0aXRsZUZvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrJztcbiAgICB0aXRsZUZvcm1EaXYuYXBwZW5kQ2hpbGQodGl0bGVGb3JtTGFiZWwpO1xuXG4gICAgY29uc3QgdGl0bGVGb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlRm9ybUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVGb3JtSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlRm9ybUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIHRpdGxlRm9ybUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICB0aXRsZUZvcm1EaXYuYXBwZW5kQ2hpbGQodGl0bGVGb3JtSW5wdXQpO1xuICAgIFxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Gb3JtRGl2KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRm9ybUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkZvcm1MYWJlbC5mb3IgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uRm9ybUxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbkZvcm1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Gb3JtTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25Gb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uRm9ybUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgZGVzY3JpcHRpb25Gb3JtSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uRm9ybUlucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uRm9ybUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBkZXNjcmlwdGlvbkZvcm1EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Gb3JtSW5wdXQpO1xuXG5cbiAgICBjb25zdCBkdWVEYXRlRm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZHVlRGF0ZUZvcm1EaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUZvcm1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUZvcm1MYWJlbC5mb3IgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZUZvcm1MYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgZGF0ZSc7XG4gICAgZHVlRGF0ZUZvcm1EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUZvcm1MYWJlbCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlRm9ybUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUZvcm1JbnB1dC5pZCA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlRm9ybUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZUZvcm1JbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZHVlRGF0ZUZvcm1EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUZvcm1JbnB1dCk7ICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0Rm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RvTGlzdEZvcm0gZnJvbSBcIi4vbWFrZUh0bWxcIjtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHN0ZXBzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuY29uc3QgZGVmYXVsdFRhc2sgPSBuZXcgVGFzaygpO1xuXG50b2RvTGlzdEZvcm0oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=