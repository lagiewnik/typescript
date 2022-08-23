const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const taskNameInputElement: HTMLInputElement = document.querySelector("#name")
const addButtonElement: HTMLElement = document.querySelector("button")

const taskA : Task= {
    title: "vbrake",
    done: true,
    category: "hobby"
}
const taskB : Task = {
    title: "3BET analise",
    done: false,
    category : "poker"
}
const tasks: Task [] = [taskA, taskB];

interface Task {
    title: string;
    done: boolean;
    category?: "testing"|"work"| "poker"|  "general" |"hobby"//optional property + literal type
}

const categories: string[] = ["testing", "work", "poker",  "general"]

const render = () => {
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
const addTask = (task: Task) => {
    tasks.push(task)
}
addTask({title: "cypress", done: false, category: "work"})
render()



addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault() //zapobieganie wysłania formularza
    addTask({title:  taskNameInputElement.value, done:false});
    render()
})