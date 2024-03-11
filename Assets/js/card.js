const card = (objeto) => {
  const card = document.createElement("div");
  console.log(objeto);
  const img = document.createElement("img");
  const preco = document.createElement("p");
  const button = document.createElement("button");
  const name = document.createElement("p");
  const id = document.createElement("span");

  id.className = "id";
  name.className = "nameGame";
  preco.className = "precoGame";
  card.className = "card";
  //card_img.className = "card_img";
  img.src = objeto.path; //"Assets/img/cd.png";
  img.alt = "Imagem do jogo";
  //card_img.appendChild(img);
  card.appendChild(img);
  name.textContent = objeto.nome;
  card.appendChild(name);
  id.innerText = objeto.id;
  card.appendChild(id);
  preco.textContent = objeto.preco.toFixed(2); //"99,90";
  card.appendChild(preco);
  button.onclick = changePage;
  button.textContent = "Comprar";
  button.className = "btn_cdCompra";
  card.appendChild(button);
  return card;
};

const changePage = () => {
  window.location.href = "./productPage.html";
};
export default card;
