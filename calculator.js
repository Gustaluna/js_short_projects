const prompt = require("./prompt")

function callCalculatorMenu () {
    console.log("Wellcome to your calculator")
    console.log("Choose one of the option below")
    console.log("1. Addition")
    console.log("2. Subtraction")
    console.log("3. Multiplication")
    console.log("4. Division")
    console.log("5. Exit")
}

async function addition (){
    let firstNumber = Number (await prompt("First number: "))
    let secondNumber = Number (await prompt("Second Number: "))
    let result1 = (`The result is: ${firstNumber + secondNumber}`)
    console.log (result1)
}
async function subtraction (){
    let firstNumber = Number (await prompt("First number: "))
    let secondNumber = Number (await prompt("Second Number: "))
    const result2 = (`The result is: ${firstNumber - secondNumber}`)
    console.log (result2)
}
async function multiplication (){
    let firstNumber = Number (await prompt("First number: "))
    let secondNumber = Number (await prompt("Second Number: "))
    const result3 = (`The result is: ${firstNumber * secondNumber}`)
    console.log (result3)
}
async function division (){
    let firstNumber = Number (await prompt("First number: "))
    let secondNumber = Number (await prompt("Second Number: "))
    const result4 = (`The result is: ${firstNumber / secondNumber}`)
    console.log (result4)
}
async function main () {
    callCalculatorMenu()
    let option = Number(await prompt('Type your option: '))
    while (option != 5){
        if(option > 0 && option < 5){
            if (option === 1){
                await addition ()
            }
            if (option === 2){
                await subtraction ()
            }
            if (option === 3){
                await multiplication ()
            }
            if (option === 4){
                await division ()
            }
        } else{
            console.log ('Invalid operation, try a valid option')
        }
        callCalculatorMenu()
        option = Number(await prompt('Type your option: '))
    }
    console.log ('You are out')
} 
main()
