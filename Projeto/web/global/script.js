var home = document.querySelector(".fi-sr-home");
var publicacoes = document.querySelector(".fi-sr-megaphone");
var usuario = document.querySelector(".fi-ss-user");
var sair = document.querySelector(".sair");

// var entrar = document.querySelector("#entrar")

var id = localStorage.getItem('id_user')

home.addEventListener("click", () => {
    window.location.href = "../home"
})

publicacoes.addEventListener("click", () => {
    window.location.href = "../publicacoes"
})

usuario.addEventListener("click", () => {
    window.location.href = "../usuario"
})

console.log(id)
    
fetch("http://10.87.207.9:8080/api/user/" + id)
.then(res => {
    return res.json();
}).then(data =>{
    document.querySelector('.foto-usuario').src = data.avatar;
    document.querySelector('.nome-usuario').innerHTML = data.username;

}).catch(err =>[
    console.log(err)
])

sair.addEventListener("click", () => {
    window.location.href = "../login"
    storage.clear();
})
