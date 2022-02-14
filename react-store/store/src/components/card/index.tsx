import "./style.css";
import Image from 'react-image-webp';
function Card() {
    return (
        <>
            <div className="card">

                <picture>
                    <source srcSet="./forza.webp" type="image/webp"/>
                    <img src="./forza.webp" alt="logo"/>
                </picture>

                        <p className="nameGame"></p>
                        <p className="precoGame"></p>
                        <button className="btn_compra">Comprar</button>
                    </div>
                </>
                );
}
                export default Card;

/* card = (objeto) => {
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
} */