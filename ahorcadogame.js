

String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); 
} 


const palabras = ['casa ', 'perro', 'gato', 'elefante'];

const palabra =  palabras[Math.floor(Math.random()*palabras.length)];

let palabrasecreta = palabra.replace(/./g,"_ ");

document.querySelector("#output").innerHTML = palabrasecreta;
let contadordeerrores = 0 ;
document.querySelector("#calcular").addEventListener('click', () => {

    const letra = document.querySelector("#letra").value;
    let fallo = true;
    
    for(const i in palabra){
        if(letra ==palabra[i])
        {
            palabrasecreta = palabrasecreta.replaceAt(i*2,letra);
            fallo =false;
        }
        
    }

    if(fallo)
    {
        contadordeerrores = contadordeerrores + 1;
        document.querySelector("#ahorcado").style.backgroundPosition =  -(202*contadordeerrores) + "px 0";

        if(contadordeerrores == 5 )
        {
            alert("Perdiste el juego");
        }
    }else{
        if(palabrasecreta.indexOf("_")<0){
            alert("Ganaste");
        }
    }


   
    
    document.querySelector("#output").innerHTML = palabrasecreta;
    document.querySelector("#letra").value = "";
})