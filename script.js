let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todo-list ul");
	errorInfo = document.querySelector(".error-info");
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTask);
	ulList.addEventListener("click", checkClick);
};

const addNewTask = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		ulList.append(newTodo);
		todoInput.value = "";
		errorInfo.textContent = "";
		createToolsArea();
	} else {
		errorInfo.textContent = "Wpisz treść zadania";
	}
};

const createToolsArea = () => {
	const toolPanel = document.createElement("div");
	toolPanel.classList.add("tools");
	newTodo.append(toolPanel);
	const completeBtn = document.createElement("button");
	completeBtn.classList.add("done");
	completeBtn.textContent = "Zrobione";
	toolPanel.append(completeBtn);
	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "Usuń";
	toolPanel.append(deleteBtn);
};

const checkClick = (e) => {
	if (e.target.matches(".done")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const deleteTodo = (e) => {
	e.target.closest("li").remove();
};
document.addEventListener("DOMContentLoaded", main);
