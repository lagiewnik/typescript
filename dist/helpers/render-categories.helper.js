export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            //console.log("afterr radiobutton click: " + category + " selected category: " + selectedCategory)
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoriesContainerElement.appendChild(categoryElement);
        categoriesContainerElement.appendChild(radioInputElement);
        categoriesContainerElement.appendChild(labelElement);
    });
};
