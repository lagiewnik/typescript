const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLElement = document.querySelector("button")

const task = {
    name: "pies",
    done: true
}
const tasks: {
    name: string;
    done: boolean;
}[] = [task];

const render = () => {
    tasksContainerElement.innerHTML = ""
    tasks.forEach((element, index) => {
        const taskElement: HTMLElement = document.createElement("li")
        const id : string= `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = element.name;
        labelElement.setAttribute("for", id)

        const checkboxElement: HTMLInputElement = document.createElement("input")
        checkboxElement.type = "checkbox";
        checkboxElement.name = element.name
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

render()

const addTask = (taskName: string) => {
    tasks.push({name: taskName, done:  false})
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault() //zapobieganie wysłania formularza
    addTask(taskNameInputElement.value);
    render()
})