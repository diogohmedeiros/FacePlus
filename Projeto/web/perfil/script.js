var melhoresAvaliacoes = document.querySelector(".melhores-avaliacoes");
var teste = document.querySelector(".teste");

var toavaliacoes = document.querySelector(".toavaliacoes")
var tofotos = document.querySelector(".tofotos")

// var infoPerfil = document.querySelector(".info-perfil")

var id = localStorage.getItem("id_estabelecimento");


toavaliacoes.addEventListener("click", () => {
    window.location.href = "../perfil/index.html"
})

tofotos.addEventListener("click", () => {
    window.location.href = "../perfil/fotos.html"
})



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

function fotos() {
    let card = document.querySelector('.card').cloneNode(true);
    let conteudo = document.querySelector('.conteudo-perfil')


    fetch("http://10.87.207.9:8080/establishment/pub/")
    .then(res => {
        return res.json();
    }).then(data =>{
        console.log(card.querySelector('img'))
        data.forEach(conta => {
            if(conta.establishment.id == id){
                card.querySelector('div').querySelector('div').querySelector('.foto-sugestao').src = conta.establishment.image
                card.querySelector('div').querySelector('div').querySelector('.perfil-nome').innerHTML = conta.establishment.name
                // card.querySelector('.publicacao').src = conta.establishment.image

                conteudo.appendChild(card)
            }else{
            }
            
        })
    }).catch(err =>[
        console.log(err)
    ])

}

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
        perfilNome.innerHTML = "Diogo Medeiros";
    
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

fetch("http://10.87.207.9:8080/establishment/" + id)
.then(resp => { return resp.json(); })
.then(data => {
    console.log(data)
    document.querySelector('#avatar').src = data.image;
    document.querySelector('.perfil-nome').innerHTML = data.name;
    document.querySelector('.perfil-email').innerHTML = data.email;
    // document.querySelector('.biografia').innerHTML = data.biografia;


})
