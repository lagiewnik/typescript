import { renderCategories } from "./helpers/render-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
import { Category, Task } from "./types/types.js";
import { TaskClass } from "./classes/task.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const taskA = new Task("vbrake", false, Category.HOBBY);
const taskB = new Task("3BET ", false, Category.POKER);
const taskC = ["cBET", Category.POKER, false];
const tasks = [taskA, taskB];
const categories = [Category.HOBBY, Category.WORK, Category.POKER, Category.GENERAL];
const addTask = (task) => {
    tasks.push(task);
    console.log(task);
};
addTask(new Task(taskC[0], taskC[2], taskC[1]));
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
render(tasks, tasksContainerElement);
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
console.log("11111" + selectedCategory);
const taskClass = new TaskClass("Konstrukcje", false);
//console.log((taskClass))
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); //zapobieganie wysłania formularza
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    console.log(selectedCategory);
    render(tasks, tasksContainerElement);
});
