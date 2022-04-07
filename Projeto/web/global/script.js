var home = document.querySelector(".fi-sr-home")
var publicacoes = document.querySelector(".fi-sr-megaphone")
var usuario = document.querySelector(".fi-ss-user")


home.addEventListener("click", () => {
    window.location.href = "../home"
})

publicacoes.addEventListener("click", () => {
    window.location.href = "../publicacoes"
})

usuario.addEventListener("click", () => {
    window.location.href = "../usuario"
})