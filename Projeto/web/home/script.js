var listaEstabelecimentos = document.querySelector(".lista-estabelecimentos");


fetch("http://10.87.207.9:8080/establishment")
.then(resp => { return resp.json(); })
.then(data => {
    data.forEach(estabelecimentos => {
        let card = document.createElement("div");
        card.className = "card-estabelecimentos";

        let fotoEstabelecimento = document.createElement("img");
        fotoEstabelecimento.className = "foto-estabelecimento";            
        fotoEstabelecimento.setAttribute("src", estabelecimentos.image)

        let nomeLocalizacao = document.createElement("div");
        nomeLocalizacao.className = "nome-localizacao";

        let nomeEstabelecimento = document.createElement("p");
        nomeEstabelecimento.innerHTML = estabelecimentos.name;
        // nomeEstabelecimento.innerHTML = "NeyLanches";

        let localizacao = document.createElement("div");
        localizacao.className = "localizacao";

        let localEstabelecimento = document.createElement("p");
        localEstabelecimento.innerHTML = estabelecimentos.location;
        // localEstabelecimento.innerHTML = "Jaguariúna";

        let localIcon = document.createElement("i");
        localIcon.className = "fi fi-rs-marker";

        localizacao.appendChild(localIcon);
        localizacao.appendChild(localEstabelecimento);
        nomeLocalizacao.appendChild(nomeEstabelecimento);
        nomeLocalizacao.appendChild(localizacao);
        card.appendChild(fotoEstabelecimento);
        card.appendChild(nomeLocalizacao);
        listaEstabelecimentos.appendChild(card);
    })
})

