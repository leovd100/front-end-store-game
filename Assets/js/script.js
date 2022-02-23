import { buscaDados } from "./buscarDados.js";
import {videoObj} from "./video.js";

const btn_compra = document.querySelector(".btn-compra");
const btn_sobre = document.querySelector(".btn-sobre");
const btn_nextLeft = document.querySelector("[left]")
const btn_nextRight = document.querySelector("[right]")
const campo = document.querySelector('.form_imput');
const form = document.querySelector('.form-search');


/* 
const buscaDados = async(value) => {
    let url = value
    const dados = await fetch(url)
    const jsonData = await dados.json();
    
    console.log(jsonData)   
} */

//listaVideos = []





/* pathBackGround: "./Assets/img/montanha.jpg"
​
pathLogo: "./Assets/img/logoGame.png"
​
pathPerson: "./Assets/img/persons/kratos.png"
​
pathVideo: "./Assets/vid/godofwar.mp4#t8,100"
 */







let indexMain = 0;


btn_nextLeft.addEventListener('click' ,() => {
    
    indexMain--;
    if (indexMain < 0){
        indexMain = 2;
    }
    
    console.log(indexMain)
    LoadBackGround(indexMain);
    
    
})


btn_nextRight.addEventListener('click' ,() => {
    console.log(indexMain)

    indexMain++;
    if (indexMain > 2){
        indexMain = 0;
    }
    console.log(indexMain)


    LoadBackGround(indexMain);

})

// CADA UM SER UM ARQUIVO
let changeLogo = (e) => {
    const path = ["../Assets/img/logoGame.png", "../Assets/img/tlouLogo.png" , "../Assets/img/halo-logo.png"]
   
    return path[e];
}

let changePerson = (e) => {
    const path = [
        "../Assets/img/persons/kratos.png", "../Assets/img/persons/thelast.png", "../Assets/img/persons/helo.png",
    ]
    return path[e]
}

let changeVideo = (e) => {
    const path = ['../Assets/vid/godofwar.mp4#t8,100', "../Assets/vid/thelast2.mp4#t8,100", "../Assets/vid/haloinfinite.mp4#t8,100"]
    return path[e]
}


let changeBackGround = (index) => {
    const path = [
        '../Assets/img/montanha.jpg','../Assets/img/scenaryTheLast.jpg','../Assets/img/halo-background.webp'
    ]
    
    return path[index];
}


/* 
buscaDados("http://localhost:8081/video").then( x => x.map(x => {
    let teste = videoObj(x.pathVideo, x.pathLogo, x.pathPerson, x.pathBackGround)    
    console.log(teste)
})).then( x => {
    return x.lenght
})

 */


const LoadBackGround = (index) => {
    let bg_video = document.querySelector(".bg-video__content")
    let video = document.querySelectorAll(".vd1");
    let logoGame = document.querySelector(".logo_game");
    let peron = document.querySelector(".person");
    let bg_person = document.querySelector(".bg-video")
    bg_video.currentTime = "7.0";

   
   
    logoGame.src = changeLogo(index)
    peron.src = changePerson(index)
    bg_person.style.backgroundImage = `url(${changeBackGround(index)})`
   
    video.forEach(e => {       
        e.src = changeVideo(index)
    });


    bg_video.loop = true;
    bg_video.load()
    bg_video.play()
}


LoadBackGround(indexMain);