const prompt = require('./prompt')

function menu(){
    console.log('Bem vindo ao seu validador de CPF!')
    console.log('----------------------------------')
    console.log('1. Validar o CPF')
    console.log('2. Sair')
}

async function cpf (){
    let input = (await prompt ('Digite seu CPF aqui: '))
    const digito = Array.from(input).map((letra) => Number(letra))
    let PrimeiroPasso = Number (digito[0] * 10 + digito[1] * 9 + digito[2] * 8 + digito[3] * 7 + digito[4] * 6 + digito[5] * 5 + digito[6] * 4 + digito[7] * 3 + digito[8] * 2)
    let SegundoPasso = Number (PrimeiroPasso % 11)
    if (SegundoPasso <= 1){
        SegundoPasso = 0
    }
       
    else{
        SegundoPasso = 11 - SegundoPasso
    }

    let TerceiroPasso = Number (digito[0] * 11 + digito[1] * 10 + digito[2] * 9 + digito[3] * 8 + digito[4] * 7 + digito[5] * 6 + digito[6] * 5 + digito[7] * 4 + digito[8] * 3 + digito[9] * 2)
    let QuartoPasso = Number (TerceiroPasso % 11)
    if (QuartoPasso <= 1){
        QuartoPasso = 0
    }   
    else{ 
        QuartoPasso = 11 - QuartoPasso 
    }   
        function allAreEqual(array) {
        if (array.length > 0) {
          const result = array.every(element => {
            if (element === array[0]) {
              return true
            }
          })
          return result
        }
        return false
        }

        if (digito.lengthn === 11 && SegundoPasso === digito[9] && QuartoPasso === digito[10] && allAreEqual(digito) === false){
            console.log('CPF Válido')
    } else
            console.log('CPF Inválido')
}            
async function main () {
    menu()
    let option = Number(await prompt('Escolha sua opção: '))
    while (option != 2){
        if(option > 0 && option < 2){
            if (option === 1){
                await cpf ()
            }
        } else{
            console.log ('Operação inválida! Por favor tente outra opção!')
        }
        menu()
        option = Number(await prompt('Escolha sua opção:'))
    }
    console.log ('Você saiu do programa...')

} 
main()