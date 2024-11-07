const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const senhaInput = document.querySelector("#senha")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (nameInput.value === ""){
        alert('Por favor preencha seu nome.')
        return
    }
})
