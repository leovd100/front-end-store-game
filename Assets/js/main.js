const form = document.querySelector('.form-search');
const campo = document.querySelector('.form_imput');
form.addEventListener('submit', event => {
    event.preventDefault();
    // SOMENTE TESTE -----------------------------------------
 /*    var dados = JSON.stringify($('input').val());
    sessionStorage.setItem('chave', dados );
 */
    localStorage.setItem('searchValue', campo.value);
    window.open("../../page/http://searchPage.html", "_self")
})




//... depois ...

//var dadosArquivados = JSON.parse(sessionStorage.getItem('chave'));