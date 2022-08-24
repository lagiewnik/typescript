import { Category } from "../types/types"


export const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, inputChangeCallback: (category: Category) => void) => {

    categories.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li")
        const radioInputElement: HTMLInputElement = document.createElement("input")
        radioInputElement.type="radio"
        radioInputElement.name = "category"
        radioInputElement.value = category
        radioInputElement.id =`category-${category}`
        radioInputElement.addEventListener("change", ()=>{
            inputChangeCallback(category)
            //console.log("afterr radiobutton click: " + category + " selected category: " + selectedCategory)

        })

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.setAttribute("for",`category-${category}` )
        labelElement.innerText = category

        categoriesContainerElement.appendChild(categoryElement)
        categoriesContainerElement.appendChild(radioInputElement)
        categoriesContainerElement.appendChild(labelElement)
    })
}