const form = document.querySelector(".form-search");
const campo = document.querySelector(".form_imput");
const content = document.querySelector(".content");

const changePage = () => {
  window.location.href = "./productPage.html";
};

const card = (objeto) => {
  const card = document.createElement("div");
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
  preco.textContent = objeto.preco.toFixed(2); //"99,90";
  card.appendChild(preco);
  button.textContent = "Comprar";
  button.className = "btn_cdCompra";
  button.onclick = changePage;
  id.innerText = objeto.id;
  card.appendChild(id);
  card.appendChild(button);

  return card;
};

const buscaDados = async (value) => {
  let url = `http://localhost:8081/games/filter?name=${value}`;
  const dados = await fetch(url);
  await dados
    .json()
    .then((jsonObject) => {
      console.log(jsonObject);
      content.innerHTML = "";
      preencherLista(jsonObject);
    })
    .catch((err) => {
      content.innerText = "";
      notFound();
    });
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  removeAll();

  buscaDados(campo.value);
});

const getButtonsBuy = () => {
  const buttonsBuy = document.querySelectorAll(".btn_cdCompra");

  buttonsBuy.forEach((x) => {
    x.addEventListener("click", (j) => {
      localStorage.setItem(
        "productId",
        x.parentNode.children.item(3).textContent
      );
    });
  });
};

function notFound() {
  const text = document.createElement("div");
  text.className = "text_notFound";
  text.innerHTML = `<h2><span class="notFound">Ops!</span> Não foi encontrado nenhum resultado para a busca<span class="notFound"> "${campo.value}" </span> </h2>`;
  content.appendChild(text);
}

function removeAll() {
  let card = document.querySelectorAll(".card");
  card.forEach((x) => x.remove());
}

campo.value = localStorage.getItem("data");
buscaDados(campo.value);
