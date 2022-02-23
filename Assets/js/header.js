const select = document.querySelectorAll(".pageSelect");
const myArray = Array.from(select);


myArray.forEach(x => { 
    x.addEventListener("click", j => {
        localStorage.setItem("idSelect", j.target.id)
        
         if(localStorage.getItem("idSelect") != null){
            window.location.href = "./pageSelect.html"
        } 
    }
)})

/*
    1 - play
    2 - xbox
    3 - nintendo
*/

