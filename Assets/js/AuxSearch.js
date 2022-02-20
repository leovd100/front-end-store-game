const form = document.querySelector('.form-search');
const campo = document.querySelector('.form_imput');

form.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.setItem("data", campo.value);
    if(localStorage.getItem("data") != null){
        window.location.href = "../../searchPage.html"
    }
})