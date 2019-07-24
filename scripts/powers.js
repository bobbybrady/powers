document.querySelector("#activate-flight").addEventListener("click", function (event){
    oneFunctionToRuleThemAll(event)
})

document.querySelector("#activate-mindreading").addEventListener("click", function (event){
    oneFunctionToRuleThemAll(event)
})

document.querySelector("#activate-xray").addEventListener("click", function (event){
    oneFunctionToRuleThemAll(event)
})




let flight = document.getElementById('flight')
let mindreading = document.getElementById('mindreading')
let xray = document.getElementById('xray')

// const flightHandlerFunction = (newClass) => {
//     flight.classList.remove("disabled")
//     flight.classList.add(newClass)
// }

// const mindreadingHandlerFunction = (newClass) => {
//     mindreading.classList.remove("disabled")
//     mindreading.classList.add(newClass)
// }

// const xrayHandlerFunction = (newClass) => {
//     xray.classList.remove("disabled")
//     xray.classList.add(newClass)
// }

document.querySelector("#activate-all").addEventListener("click", function (event){
    allHandlerFunction("enabled")
})

const allActivate = document.querySelectorAll(".power")
const allHandlerFunction = (newClass) => {
    allActivate.forEach((all) => {
        all.classList.remove("disabled")
        all.classList.add(newClass)
    })
}

document.querySelector("#deactivate-all").addEventListener("click", function (event){
    allDeactivateHandlerFunction("enabled")
})

const allDeactivateHandlerFunction = (newClass) => {
    allActivate.forEach((all) => {
        all.classList.remove(newClass)
        all.classList.add("disabled")
    })
}

const oneFunctionToRuleThemAll = (event) => {
    if (event.target.id.split('-')[1] === "flight") {
        flight.classList.remove("disabled")
        flight.classList.add("enabled")
    } else if (event.target.id.split('-')[1] === "mindreading") {
        mindreading.classList.remove("disabled")
        mindreading.classList.add("enabled")
    } else if (event.target.id.split('-')[1] === "xray") {
        xray.classList.remove("disabled")
        xray.classList.add("enabled")
    }
}