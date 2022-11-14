const prompt = require("./prompt")

function callCalculatorMenu () {
    console.log("Wellcome to your opration table")
    console.log("Choose one of the option below")
    console.log("1. Addition")
    console.log("2. Subtraction")
    console.log("3. Multiplication")
    console.log("4. Division")
    console.log("5. Exit")
}
async function tableAdd(){  
    let number = Number (await prompt("Choose a number: "))
            for (let i = 1; i <= 10; i++) {
                console.log(number + ' + ' + i + ' = ' + String((number + i).toFixed(1)))
            }
            console.log('The End')
}
async function tableSub(){  
    let number = (Number (await prompt("Choose a number: ")))
    for (let i = 1; i <= 10; i++) {
        console.log(number + ' - ' + i + ' = ' +  String((number - i).toFixed(1)))
    }
    console.log('The End')
}
async function tableMult(){  
    let number = Number (await prompt("Choose a number: "))
    for (let i = 1; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' +  String((number * i).toFixed(1)))
    }
    console.log('The End')
}
async function tableDiv(){  
    let number = (Number (await prompt("Choose a number: ")))
    for (let i = 1; i <= 10; i++) {
        console.log(number + ' ÷ ' + i + ' = ' + String((number / i).toFixed(1)))
    }
    console.log('The End')
}
async function main () {
    callCalculatorMenu()
    let option = Number(await prompt('Type your option: '))
    while (option != 5){
        if(option > 0 && option < 5){
            if (option === 1){
                await tableAdd ()
            }
            if (option === 2){
                await tableSub ()
            }
            if (option === 3){
                await tableMult ()
            }
            if (option === 4){
                await tableDiv ()
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