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
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((element, index) => {
        const taskElement = document.createElement("li");
        if (element.category) {
            taskElement.classList.add(element.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = element.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = element.title;
        checkboxElement.id = id;
        checkboxElement.checked = element.done;
        checkboxElement.addEventListener("change", () => {
            element.done = !element.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoriesContainerElement.appendChild(categoryElement);
        categoriesContainerElement.appendChild(radioInputElement);
        categoriesContainerElement.appendChild(labelElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addTask({ title: "cypress", done: false, category: "work" });
render();
renderCategories();
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); //zapobieganie wysłania formularza
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render();
});
