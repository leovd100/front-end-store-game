
const form = document.querySelector('.form-search');
const campo = document.querySelector('.form_imput');
const content = document.querySelector(".content");


const card = (objeto) => {
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

    return card;
}


const buscaDados = async(value) => {
    let url = `http://localhost:8081/games/filter?name=${value}` 
    const dados = await fetch(url)
    const jsonData = await dados.json();
    if (jsonData.length == 0){
        content.innerText = ""
        notFound();

    }else {
        content.innerHTML = ""
        preencherLista(jsonData);
    }
}

const preencherLista = (jsonData) => {
    
    jsonData.forEach(y => {

        let obj = {
            nome: y.nome,
            path: y.imagem,
            preco: y.preco
        }
        
        content.appendChild(card(obj)) 

    })
    
}




form.addEventListener('submit', event => {
    event.preventDefault();
    removeAll();
    if(campo.value != ''){
        buscaDados(campo.value)
    }
})


function notFound(){
    const text = document.createElement("div");
    text.className = "text_notFound"
    text.innerHTML = `<h2><span class="notFound">Ops!</span> Não foi encontrado nenhum resultado para a busca<span class="notFound"> "${localStorage.getItem("data")}" </span> </h2>`
    content.appendChild(text); 
}




function removeAll(){
    let card = document.querySelectorAll(".card");
    card.forEach(x => x.remove());
}

campo.value = localStorage.getItem("data");
buscaDados(campo.value);
