const content = document.querySelector(".content");
const id =  localStorage.getItem("idSelect");


const changePage = () => {
    window.location.href = "./productPage.html";
}


const card = (objeto) => {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const preco = document.createElement("p");
    const button = document.createElement("button");
    const name = document.createElement("p");
    const id = document.createElement("span");

    id.className = "id";
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
    id.innerText = objeto.id;
    card.appendChild(id);
    preco.textContent = objeto.preco.toFixed(2);//"99,90";
    card.appendChild(preco)
    button.onclick = changePage;
    button.textContent = "Comprar";
    button.className = "btn_cdCompra";
    card.appendChild(button)

    return card;
}




const buscaDados = async(valor) => {
    let url = `http://localhost:8081/games/filter/sessao?id=${valor}`
    const dados = await fetch(url)
    const jsonData = await dados.json();
  
    preencherLista(jsonData);
}

const preencherLista = (jsonData) => {

    jsonData.forEach(y => {
        let obj = {
            id: y.id,
            nome: y.nome,
            path: y.imagem,
            preco: y.preco
        }
        content.appendChild(card(obj)) 
        
    })
    
    getButtonsBuy()

}

let testIdExport = ""
const getButtonsBuy = () => {
    const buttonsBuy = document.querySelectorAll('.btn_cdCompra');

    buttonsBuy.forEach(x => {
        x.addEventListener('click', j => {
            testIdExport = localStorage.setItem("productId", x.parentNode.children.item(2).textContent)
        })
    })
}


buscaDados(id);



