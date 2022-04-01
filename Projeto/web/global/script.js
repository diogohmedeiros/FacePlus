var home = document.querySelector(".fi-sr-home")
var toavaliacoes = document.querySelector(".toavaliacoes")
var tofotos = document.querySelector(".tofotos")


home.addEventListener("click", () => {
    window.location.href = "../home"
})

toavaliacoes.addEventListener("click", () => {
    window.location.href = "../perfil/index.html"
})

tofotos.addEventListener("click", () => {
    window.location.href = "../perfil/fotos.html"
})