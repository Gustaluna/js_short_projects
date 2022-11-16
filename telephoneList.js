const prompt = require("./prompt")

const list = []

function callMenu () {
    console.log("Wellcome to you telephone list")
    console.log("Type one of the options below")
    console.log("1. Add contact")
    console.log("2. List all of your contacts")
    console.log("3. Exit")
}

async function addContact (){
    let typedName = await prompt("Name: ")
    let typedNumber = await prompt("Number: ")
    let typedAdress = await prompt("Address: ")
    const newTelephone = {
        name: typedName,
        number: typedNumber,
        address: typedAdress,
        id: list.length+1
    }
    list.push(newTelephone)
    console.log(`${newTelephone.name} was successfully add`)
}

function listContacts () {
    console.log("That's your contacts")
    for(let i = 0; i < list.length; i++){
        let contact = list[i]
        console.log(`#${contact.id}`)
        console.log(`Name: ${contact.name}`)
        console.log(`Number: ${contact.number}`)
        console.log(`Address: ${contact.address}`)
        console.log("__________________________________")
    }

}

async function main() {
    callMenu()
    let option = Number(await prompt("Type your option: "))
    while (option != 3){
        if(option > 0 && option < 3){
            if (option === 1){
                await addContact()
            }
            if (option === 2){
                listContacts()
            }
        } else{
            console.log("Invalid operation, try a valid option")
        }
        callMenu()
        option = Number(await prompt("Type your option: "))
    } 
    console.log("You're out")
}
main()