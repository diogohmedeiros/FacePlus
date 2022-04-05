var melhoresAvaliacoes = document.querySelector(".melhores-avaliacoes");
var teste = document.querySelector(".teste");

fetch("http://10.87.207.9:8080/establishment")
.then(resp => { return resp.json(); })
.then(data => {
    data.forEach(estabelecimentos => {
        let sugestao = document.createElement("div");
        sugestao.className = "sugestao";

        let fotoEstabelecimento = document.createElement("img");
        fotoEstabelecimento.className = "foto-sugestao";            
        fotoEstabelecimento.setAttribute("src", estabelecimentos.image)
        // fotoEstabelecimento.setAttribute("src", "../assets/posts/mcdonalds.jpg")

        let nomeLocalizacao = document.createElement("div");
        nomeLocalizacao.className = "nome-localizacao";

        let nome = document.createElement("p");
        nome.innerHTML = estabelecimentos.name;
        // nome.innerHTML = "McDonalds";

        let localEstabelecimento = document.createElement("p");
        localEstabelecimento.innerHTML = estabelecimentos.location;
        // localEstabelecimento.innerHTML = "Jaguariúna";

        let avaliacao = document.createElement("p");
        if (estabelecimentos.average_rating != null) {
            avaliacao.innerHTML = estabelecimentos.average_rating + ".0";
        } else {
            avaliacao.innerHTML = "Sem avaliações";
        }

        let starIcon = document.createElement("i");
        starIcon.className = "fi fi-rr-star";

        avaliacao.appendChild(starIcon);
        nomeLocalizacao.appendChild(nome);
        nomeLocalizacao.appendChild(localEstabelecimento);
        sugestao.appendChild(fotoEstabelecimento);
        sugestao.appendChild(nomeLocalizacao);
        sugestao.appendChild(avaliacao);
        melhoresAvaliacoes.appendChild(sugestao);

        sugestao.addEventListener("click", () => {
            window.location.href = "../perfil"
        })
    })
})

// let sugestao = document.createElement("div");
// sugestao.className = "sugestao";

// let fotoEstabelecimento = document.createElement("img");
// fotoEstabelecimento.className = "foto-sugestao";            
// // fotoEstabelecimento.setAttribute("src", estabelecimentos.image)
// fotoEstabelecimento.setAttribute("src", "../assets/posts/mcdonalds.jpg")

// let nomeLocalizacao = document.createElement("div");
// nomeLocalizacao.className = "nome-localizacao";

// let nome = document.createElement("p");
// // localEstabelecimento.innerHTML = estabelecimentos.name;
// nome.innerHTML = "McDonalds";

// let localEstabelecimento = document.createElement("p");
// // localEstabelecimento.innerHTML = estabelecimentos.location;
// localEstabelecimento.innerHTML = "Jaguariúna";

// let avaliacao = document.createElement("p");
// // localEstabelecimento.innerHTML = estabelecimentos.name;
// avaliacao.innerHTML = "4.0";

// let starIcon = document.createElement("i");
// starIcon.className = "fi fi-rr-star";

// avaliacao.appendChild(starIcon);
// nomeLocalizacao.appendChild(nome);
// nomeLocalizacao.appendChild(localEstabelecimento);
// sugestao.appendChild(fotoEstabelecimento);
// sugestao.appendChild(nomeLocalizacao);
// sugestao.appendChild(avaliacao);
// melhoresAvaliacoes.appendChild(sugestao);

// sugestao.addEventListener("click", () => {
//     window.location.href = "../perfil"
// })

function comentar() {
    let comentar = false;

    let comentario = document.querySelector("#comentario");

    let data = comentario.value;

    if(!comentar) {
        let cardComentario = document.createElement("div");
        cardComentario.className = "card-comentario";

        let divDois = document.createElement("div");

        let com = document.createElement("p");
        com.innerHTML = data;

        console.log(data)
        divDois.appendChild(com)
           
        let divUm = document.createElement("div");
    
        let usuarioCard = document.createElement("div");
        usuarioCard.className = "usuario-card";
    
        let fotoSugestao = document.createElement("img");
        fotoSugestao.className = "foto-sugestao";
        fotoSugestao.setAttribute("src", "../assets/posts/mcdonalds.jpg")
    
        let perfilNome = document.createElement("p");
        perfilNome.className = "perfil-nome";
        perfilNome.innerHTML = "Diogo";
    
        let hora = document.createElement("p");
        hora.className = "hora";
        hora.innerHTML = "Agora";
    
        usuarioCard.appendChild(fotoSugestao);
        usuarioCard.appendChild(perfilNome);
        usuarioCard.appendChild(hora);
        divUm.appendChild(usuarioCard);
        cardComentario.appendChild(divUm);
        cardComentario.appendChild(divDois);
        teste.appendChild(cardComentario);

    }

}
