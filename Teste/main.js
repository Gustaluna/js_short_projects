const inputNome = document.getElementById("nome")
const inputIdade = document.getElementById("idade")
const botao = document.getElementById("botao")
const div = document.getElementById("wrapper")

botao.addEventListener("click", () => {
    const input = inputNome.value + " " + inputIdade.value    
    const caixa = document.createElement("div")
    caixa.style.border = "1px dotted black"
    caixa.innerText = input
    div.append(caixa)
})