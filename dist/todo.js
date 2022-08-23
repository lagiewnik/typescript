const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
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
const categories = ["testing", "work", "poker", "general"];
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
render();
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); //zapobieganie wysłania formularza
    addTask({ title: taskNameInputElement.value, done: false });
    render();
});
