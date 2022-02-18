
const idProduct = localStorage.getItem("productId");
console.log(idProduct)


const product = {
    id:String,
    nome: String,
    imagem:String,
    preco:String
}



const searchData = async(id) => {
   // mocando dados
   let prod = product;
   prod.nome =  "Watch Dogs Legion",
   prod.imagem = "Assets/img/webp/whatdogs legion.webp",
   prod.preco = 39.90

   //buscando do servidor
    /*let url = `http://localhost:8081/games/filter/${id}`
    const dados = await fetch(url)
    const jsonData = await dados.json();
    prod.id = jsonData.id;
    prod.nome = jsonData.nome;
    prod.imagem = jsonData.imagem;
    prod.preco = jsonData.preco;*/
    
   
    buildPage(prod);
    //preencherLista(jsonData);
}



const buildPage = (product) => {
    const content = document.querySelector(".content_pageBuy");
    const imageProduct = document.createElement("img");
    const preco = document.createElement("p");
    const nome = document.createElement("p");
    imageProduct.src = product.imagem;
    preco.textContent = product.preco;
    nome.textContent = product.nome;
    content.append(imageProduct, nome, preco);
}








searchData(idProduct);