const content = document.querySelector(".content");


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
    
    button.textContent = "Comprar";
    button.className = "btn_cdCompra";
    card.appendChild(button)



    return card;
}
 

const buscaDados = async() => {
    let url = "http://localhost:8081/games"
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


    console.log(buttonsBuy);
}

export default testIdExport;



 
// Mocando dados
/*
 let x =[ {
    //id:1, 
    nome: "Anthem",
    path: "Assets/img/webp/anthem.webp",
    preco: 75.99
    //secao / Integer
    // Marca: 1 - Xbox 2 - Playstation 3 - Nintendo 4 -PC 5 -Periféricos
},
{

    nome: "Batman Arkham Knight",
    path: "Assets/img/webp/Batman Xbox.webp",
    preco: 48.00
},
{
    nome: "Battlefield",
    path: "Assets/img/webp/bf2042.webp",
    preco: 143.00
},{
    nome: "Cyber Punk 2077",
    path: "Assets/img/webp/cyberPunk.webp",
    preco: 39.90
},{
    nome: "Days Gone",
    path: "Assets/img/webp/daysgone.webp",
    preco: 59.90
},{
    nome: "FIFA 22",
    path: "Assets/img/webp/fifa22.webp",
    preco: 229.99
},

{
    nome: "GTA 5 - PS4",
    path: "Assets/img/webp/gta5ps4.webp",
    preco: 59.90
},

{
    nome: "Watch Dogs Legion",
    path: "Assets/img/webp/whatdogs legion.webp",
    preco: 39.90
},


{
    nome: "Uncharted Legado dos Ladrões",
    path: "Assets/img/webp/uncharted.webp",
    preco: 189.90
},

{
    nome: "The Last Of Us",
    path: "Assets/img/webp/thelast.webp",
    preco: 139.90
},
{
    nome: "Spider-Man Miles Morales",
    path: "Assets/img/webp/spiderPs5.webp",
    preco: 139.90
},
{
    nome: "Spider-Man",
    path: "Assets/img/webp/spider.webp",
    preco: 99.90
},
{
    nome: "Resident Evil Village - Xbox One",
    path: "Assets/img/webp/reVillageXbox.webp",
    preco: 88.20
},
{
    nome: "Resident Evil Village - PS4",
    path: "Assets/img/webp/reVillagePs4.webp",
    preco: 88.20
},
{
    nome: "RedDead",
    path: "Assets/img/webp/reddead.webp",
    preco: 124.90
},
{
    nome: "Nioh",
    path: "Assets/img/webp/nioh.webp",
    preco: 29.90
},
{
    nome: "Mortal Kombat X",
    path: "Assets/img/webp/mortal kombat Xbox.webp",
    preco: 49.90
},
{
    nome: "Horizon Forbidden West",
    path: "Assets/img/webp/horizon.webp",
    preco: 290.30
},

{
    nome: "Ghost Of Tsushima",
    path: "Assets/img/webp/ghost of tsushima.webp",
    preco: 175.91
},
{
    nome: "Forza Horizon 5",
    path: "Assets/img/webp/forza.webp",
    preco: 159.90
},

{
    nome: "Far Cry 6",
    path: "Assets/img/webp/farcry.webp",
    preco: 79.90
},
{
    nome: "Far Cry 5",
    path: "Assets/img/webp/Far cry Xbox.webp",
    preco: 19.90
},
{
    nome: "Far Cry Primal",
    path: "Assets/img/webp/far cry primal.webp",
    preco: 69.90
},
{
    nome: "Dying Light",
    path: "Assets/img/webp/dying light.webp",
    preco: 39.90
},
{
    nome: "CyberPunk",
    path: "Assets/img/webp/cyberPunk.webp",
    preco: 39.90
},
{
    nome: "BF 2042 - PS5",
    path: "Assets/img/webp/bf2042ps5.webp",
    preco: 179.91
},

{
    nome: "Days Gone",
    path: "Assets/img/webp/daysgone.webp",
    preco: 59.80
},
{
    nome: "God Of War",
    path: "Assets/img/webp/god of war.webp",
    preco: 69.90
},






]

x.forEach( x => {
    content.appendChild(card(x))
}) 
*/





buscaDados();
