
export function card(objeto) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const preco = document.createElement("p");
    const button = document.createElement("button");
    const name = document.createElement("p");

    name.className = "nameGame"
    preco.className = "precoGame"
    card.className = "card";
    //card_img.className = "card_img";
    img.src = objeto.path;//"Assets/img/cd.png";
    img.alt = "Imagem do jogo";
    //card_img.appendChild(img);
    card.appendChild(img)
    name.textContent = objeto.nome;
    card.appendChild(name);
    preco.textContent = objeto.preco.toFixed(2);//"99,90";
    card.appendChild(preco)
    button.textContent = "Comprar";
    button.className = "btn_compra";
    card.appendChild(button)


    console.log("Estou sendo chamado");
    return card;
}
