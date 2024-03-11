import card from "./card.js";
const content = document.querySelector(".content");
const id = localStorage.getItem("idSelect");

const buscaDados = async (valor) => {
  let url = `http://localhost:8081/games/filter/sessao?id=${valor}`;
  const dados = await fetch(url);
  const jsonData = await dados.json();

  preencherLista(jsonData);
};

const preencherLista = (jsonData) => {
  console.log(jsonData);
  jsonData.forEach((y) => {
    let obj = {
      id: y.id,
      nome: y.nome,
      path: y.imagem,
      preco: y.preco,
    };
    content.appendChild(card(obj));
  });

  getButtonsBuy();
};

let testIdExport = "";
const getButtonsBuy = () => {
  const buttonsBuy = document.querySelectorAll(".btn_cdCompra");

  buttonsBuy.forEach((x) => {
    x.addEventListener("click", (j) => {
      testIdExport = localStorage.setItem(
        "productId",
        x.parentNode.children.item(2).textContent
      );
    });
  });
};

buscaDados(id);
