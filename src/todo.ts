import {renderCategories} from "./helpers/render-categories.helper.js";
import {render} from "./helpers/render-tasks.helper.js";
import {Category, Task} from "./types/types.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLElement = document.querySelector("button")
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")
let selectedCategory: Category;

const taskA : Task= {
    title: "vbrake",
    done: true, 
    category: Category.HOBBY
}
const taskB : Task = {
    title: "3BET analise",
    done: false,
    category : Category.POKER
}

type taskAsTuple = [string, Category, boolean ]
const taskC : taskAsTuple = ["cBET", Category.POKER, false ]


const tasks: Task [] = [taskA, taskB];

const categories: Category[] = [Category.HOBBY, Category.WORK, Category.POKER,  Category.GENERAL]

const addTask = (task: Task) => {
    tasks.push(task)
    console.log(task)
}

addTask({title: taskC[0], done: taskC[2], category: taskC[1]})
const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory
}

addTask({title: "cypress", done: false, category: Category.WORK})
render(tasks, tasksContainerElement)
renderCategories(categories, categoriesContainerElement, updateSelectedCategory )
console.log("11111"+ selectedCategory)


addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault() //zapobieganie wysłania formularza
    addTask({title:  taskNameInputElement.value, done:false, category: selectedCategory});
    console.log(selectedCategory)
    render(tasks, tasksContainerElement)
})


