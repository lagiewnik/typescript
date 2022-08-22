const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const task = {
    name: "pies",
    done: true
};
const tasks = [task];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((element, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = element.name;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = element.name;
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
const addTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault(); //zapobieganie wysłania formularza
    addTask(taskNameInputElement.value);
    render();
});
