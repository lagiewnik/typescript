const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const task = {
    title: "pies",
    done: true
};
const tasks = [task];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((element, index) => {
        const taskElement = document.createElement("li");
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
