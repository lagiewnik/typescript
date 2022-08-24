import {renderCategories} from "./helpers/render-categories.helper.js";
import {render} from "./helpers/render-tasks.helper.js";
import {Category, Task} from "./types/types.js";
import {TaskClass} from "./classes/task.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLElement = document.querySelector("button")
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category;

const taskA = new Task("vbrake", false, Category.HOBBY)
const taskB = new Task("3BET ", false, Category.POKER)

type taskAsTuple = [string, Category, boolean ]
const taskC : taskAsTuple = ["cBET", Category.POKER, false ]


const tasks: Task [] = [taskA, taskB];

const categories: Category[] = [Category.HOBBY, Category.WORK, Category.POKER,  Category.GENERAL]

const addTask = (task: Task) => {
    tasks.push(task)
    console.log(task)
}

addTask(new Task(taskC[0], taskC[2], taskC[1]))
const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory
}


render(tasks, tasksContainerElement)
renderCategories(categories, categoriesContainerElement, updateSelectedCategory )
console.log("11111"+ selectedCategory)

const taskClass = new TaskClass("Konstrukcje", false);
//console.log((taskClass))

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault() //zapobieganie wysłania formularza
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    console.log(selectedCategory)
    render(tasks, tasksContainerElement)
})


