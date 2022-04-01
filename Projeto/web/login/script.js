var email = document.getElementById("email");
var senha = document.getElementById("senha");
// let toentrar = document.querySelector("#toentrar");

var entrar = document.getElementById("entrar").addEventListener("click", () => {
    fazerLogin();
})

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault(); 
});

async function fazerLogin(){
    let body = {
        email: email.value,
        senha: senha.value
    } 

    let settings =  {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    let endpoint = "http://10.87.207.9:8080/api/login";

    let response = await fetch(endpoint, settings);
    let data = await response.json();

    if(response.status == 200){
        localStorage.setItem("id_user", data.id);
        window.location.href = '../home';
    }
}

// toentrar.addEventListener("click", () => {
//     window.location.href = "../home"
// })