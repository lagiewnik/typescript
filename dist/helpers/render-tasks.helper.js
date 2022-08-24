export const render = (tasks, tasksContainerElement) => {
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
