const select = document.querySelectorAll("#game_header_list .pageSelect");

select.forEach((element) => {
  element.addEventListener("click", (event) => {
    const clickedElement = event.currentTarget;
    const id = clickedElement.getAttribute("id");
    if (id == "user") {
      window.location.href = "./login.html";
    } else {
      localStorage.setItem("idSelect", id);

      if (localStorage.getItem("idSelect") !== null) {
        window.location.href = "./pageSelect.html";
      }
    }
  });
});

/*
    1 - play
    2 - xbox
    3 - nintendo
*/
