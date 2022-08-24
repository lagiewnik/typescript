import { Category } from "../types/types.js"

const handleCategoryChange = (category: Category) => {
    if (category === 'general') {
        console.log("Zmiana na general");
    } else if (category === "poker"){
        alert ("ALLIN")
    } else if (category === "work") {
        document.body.style.background = "blue"
    } else if (category === "hobby") {
        document.body.style.background = "black"
    }
    else {
        console.log("nigdy sie nie wyswietli")
        const never: never = category; //bedzie  błąd jeśli w typie category: Category zostały by nieobsłużone wyżej wartości czyli jeśli poza tymi 4 wyżej byłaby 5 kategoria
    }
}
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
            handleCategoryChange(category)
        })

        const labelElement: HTMLLabelElement = document.createElement("label")
        labelElement.setAttribute("for",`category-${category}` )
        labelElement.innerText = category

        categoriesContainerElement.appendChild(categoryElement)
        categoriesContainerElement.appendChild(radioInputElement)
        categoriesContainerElement.appendChild(labelElement)
    })
}

