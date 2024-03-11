// preencherLista.js
import card from "./card.js";

const preencherLista = (jsonData, content) => {
  jsonData.forEach((y) => {
    let obj = {
      id: y.id,
      nome: y.nome,
      path: y.imagem,
      preco: y.preco,
    };
    content.appendChild(card(obj));
  });
};

export default preencherLista;
