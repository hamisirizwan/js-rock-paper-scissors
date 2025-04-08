// localstorage object allows us to persist data on the browser

const inputEl = document.getElementById("nameInput")
const input2El = document.getElementById("name2Input")


const nameDisplayEl = document.getElementById("nameDisplay")

let number1 = JSON.parse(localStorage.getItem("number1"))
let number2 = JSON.parse(localStorage.getItem("number2"))

nameDisplayEl.innerHTML = number1 + number2

function saveName(){

    number1 = parseInt(inputEl.value)
    number2 = parseInt(input2El.value)

    console.log(typeof number1)
    
    localStorage.setItem("number1", number1 )
    localStorage.setItem("number2", number2 )

    nameDisplayEl.innerHTML = number1 + number2

    inputEl.value = ""
    input2El.value = ""
}

function clearName(){
    localStorage.removeItem("name")
}

// localStorage.setItem("name", "Festus")
// localStorage.removeItem("name")
// const savedName = localStorage.getItem("name")

// console.log(savedName)



// the JSON object has 2 usefull methods , 1 json.parse() , json.stringify()