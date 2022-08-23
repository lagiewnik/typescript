const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLElement = document.querySelector("button")

const task : Task= {
    title: "pies",
    done: true
}
const tasks: Task [] = [task];

interface Task {
    title: string;
    done: boolean
}
const render = () => {
    tasksContainerElement.innerHTML = ""
    tasks.forEach((element, index) => {
        const taskElement: HTMLElement = document.createElement("li")
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

render()

const addTask = (task: Task) => {
    tasks.push(task)
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault() //zapobieganie wysłania formularza
    addTask({title:  taskNameInputElement.value, done:false});
    render()
})