// main.js
import buscaDados from "./SearchData.js";
import preencherLista from "./FullList.js";
import getButtonsBuy from "./getButtonsBuy.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");

  buscaDados().then((jsonData) => {
    preencherLista(jsonData, content);
    getButtonsBuy();
  });
});
