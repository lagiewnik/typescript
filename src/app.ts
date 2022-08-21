const input1: HTMLInputElement = document.querySelector("#input1")
const input2: HTMLInputElement = document.querySelector("#input2")
const addBtnElement = document.querySelector("#addBtn")
const resultLbl = document.querySelector("#result")

const add = (a: number, b: number) => a + b

addBtnElement.addEventListener("click", ()=>{
    const sum = add(input1.valueAsNumber, input2.valueAsNumber)
    resultLbl.textContent = sum.toString()
    }
)
