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

    if (emailInput.value === "" || !validEmail(emailInput.value)){
        alert('Por favor preencha o seu email corretamente')
        return
    }

    if (!validPass(senhaInput.value, 8)){
        alert('A senha precisa de no mínimo 8 dígitos')
        return
    }
})

function validEmail(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )
 
    if (emailRegex.test(email)){
        return true
    }

    return false
}

function validPass(password, minDigts){
    if (password.lenght >= minDigts){
        return true
    }

    return false
}