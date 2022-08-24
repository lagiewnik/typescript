import { renderCategories } from "./helpers/render-categories.helper.js";
import { render } from "./helpers/render-tasks.helper.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const taskA = {
    title: "vbrake",
    done: true,
    category: "hobby"
};
const taskB = {
    title: "3BET analise",
    done: false,
    category: "poker"
};
const tasks = [taskA, taskB];
const categories = ["hobby", "work", "poker", "general"];
const addTask = (task) => {
    tasks.push(task);
    console.log(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addTask({ title: "cypress", done: false, category: "work" });
render(tasks, tasksContainerElement);
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
console.log("11111" + selectedCategory);
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); //zapobieganie wysłania formularza
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    console.log(selectedCategory);
    render(tasks, tasksContainerElement);
});
