const getButtonsBuy = () => {
  const buttonsBuy = document.querySelectorAll(".btn_cdCompra");

  buttonsBuy.forEach((x) => {
    x.addEventListener("click", (j) => {
      localStorage.setItem(
        "productId",
        x.parentNode.children.item(2).textContent
      );
    });
  });
};

export default getButtonsBuy;
