const input1: HTMLInputElement = document.querySelector("#input1")
const input2: HTMLInputElement = document.querySelector("#input2")
const addBtnElement = document.querySelector("#addBtn")
const resultLbl = document.querySelector("#result")

const add = (a: number, b: number) => a + b

addBtnElement.addEventListener("click", () => {
    const sum = add(input1.valueAsNumber, input2.valueAsNumber)
    resultLbl.textContent = sum.toString()
    console.log(sum.toString())
}
)

const buyBtnElement = document.querySelector("#buyBtn")
const buyPriceElement = document.querySelector("#buyPrice")
const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
    return hasDiscount ? originalPrice * 0.7 : originalPrice
}

buyBtnElement.addEventListener("click", () => {
    const originalPrice = 193
    const hasDiscount: boolean = new URLSearchParams(window.location.search).get("discount") === "true"
    const price = calculatePrice(originalPrice, hasDiscount)
    buyPriceElement.textContent = price.toString()

}
)