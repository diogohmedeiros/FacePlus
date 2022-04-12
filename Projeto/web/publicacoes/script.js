var melhoresAvaliacoes = document.querySelector(".melhores-avaliacoes");

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

function buscar () {
    let oculta = document.querySelectorAll(".card-estabelecimentos")

    let busca = document.querySelector("#busca").value.toLowerCase();

    let rows = document.querySelectorAll(".p-nome-estabelicimento");

    for(let i = 0; i<rows.length; i++) {
        if(rows[i].innerHTML.toString().toLowerCase().includes(busca)) {
            oculta[i].style.display = "grid";
        }else {
            oculta[i].style.display = "none";
        }
    }
}

async function publicacoes(){
    const response = await fetch("http://10.87.207.9:8080/publication/");
    const data = await response.json();
    console.log(data);
    data.forEach(e => {
        let model = document.querySelector(".card-teste").cloneNode(true)
        model.querySelector(".perfil-nome").innerHTML= e.user.username
        model.querySelector(".hora").innerHTML= e.location
        model.querySelector(".comment").innerHTML= e.text
        model.querySelector("#imgPubli").src= e.image
        model.querySelector(".foto-sugestao").src= e.user.avatar
        model.classList.remove("model")
        document.querySelector(".scroll-perfil").appendChild(model)
    } )
}

publicacoes();

