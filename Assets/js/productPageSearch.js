
const idProduct = localStorage.getItem("productId");
console.log(idProduct)


const product = {
    id:String,
    nome: String,
    imagem:String,
    preco:String,
    descricao:String

}



const searchData = async(id) => {
   // mocando dados
   let prod = product;
  /* prod.nome =  "Watch Dogs Legion",
   prod.imagem = "Assets/img/webp/whatdogs legion.webp",
   prod.preco = 39.90
   prod.descricao = "Watch Dogs: Legion is an action-adventure game played from a third-person perspective, and taking place within an open world setting based upon London, which can be explored either on foot ─ utilizing parkour moves ─ vehicles, or fast-travelling via the city's Underground stations."
  */
  
   //buscando do servidor
    let url = `http://localhost:8081/games/filter/${id}`
    const dados = await fetch(url)
    const jsonData = await dados.json();
    prod.id = jsonData.id;
    prod.nome = jsonData.nome;
    prod.imagem = jsonData.imagem;
    prod.preco = jsonData.preco;
       
    buildPage(prod);
    //preencherLista(jsonData);
}



const buildPage = (product) => {
    const content = document.querySelector(".content_pageBuy");
    const imageProduct = document.createElement("img");
    const preco = document.createElement("p");
    const nome = document.createElement("p");
    const desc = document.createElement("p");
    const capsula = document.createElement("div");
    capsula.className = "container_info_product";
    imageProduct.className = "img_product"
    preco.className = "preco"
    nome.className = "name_product"
    imageProduct.src = product.imagem;
    preco.textContent = `R$ ${product.preco}`;
    nome.textContent = product.nome;
    desc.textContent = product.descricao;
    const buyFactory = BuyButtonFactory()
    const freeShipping = FreeShipping();

    capsula.append(freeShipping,nome,preco,desc, buyFactory)
    content.append(imageProduct, capsula);
}



const BuyButtonFactory = () => {
    const capsula = document.createElement("div");
    const buttonCart = document.createElement("button");
    const takeOut = document.createElement("button");
    capsula.className = "capsula_buttonbuy"
    takeOut.className = "takeOut";
    takeOut.textContent = "Retirar na loja"
    buttonCart.className = "CartButton";
    buttonCart.textContent = "Colocar no carrinho"
    capsula.append(buttonCart, takeOut)
    return capsula;

}


const FreeShipping = () =>  {
    const freeShippingBlock = document.createElement("div");
    freeShippingBlock.className = "freeShipping";
    freeShippingBlock.textContent = "FRETE GRÁTIS"
    return freeShippingBlock;
}


searchData(idProduct);