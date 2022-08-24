import { Task } from "../types/types";

export const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = ""
    tasks.forEach((element, index) => {
        const taskElement: HTMLElement = document.createElement("li")
        if(element.category){
            taskElement.classList.add(element.category)
        }
        const id : string= `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = element.title;
        labelElement.setAttribute("for", id)

        const checkboxElement: HTMLInputElement = document.createElement("input")
        checkboxElement.type = "checkbox";
        checkboxElement.name = element.title
        checkboxElement.id = id
        checkboxElement.checked = element.done
        checkboxElement.addEventListener("change", ()=>{
            element.done  = !element.done
        })

        taskElement.appendChild(labelElement)
        taskElement.appendChild(checkboxElement)
        tasksContainerElement.appendChild(taskElement)
    });
}