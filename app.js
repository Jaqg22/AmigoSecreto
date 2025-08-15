let listaAmigos = []; // lista de amigos 
let nombreAmigo = '';
let amigoSecreto = 0;

function agregarAmigo(){
     nombreAmigo = document.querySelector('#amigo').value;
    
     if (nombreAmigo != '') {
        listaAmigos.push(nombreAmigo.toUpperCase());
        document.querySelector('#amigo').value = "";
        mostrarAmigos()
     } else {
        alert('Por favor, inserte un nombre.')
     }

}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let index = 0; index < listaAmigos.length; index++) {  
          
        lista.innerHTML += `<li>${listaAmigos[index]}</li>`  ;
        
    }
    
}


function sortearAmigo() {

    if (listaAmigos.length > 0) {
        amigoSecreto = Math.floor(Math.random() * listaAmigos.length);
        nombreAmigo = document.querySelector('#resultado');
        nombreAmigo.innerHTML = `${listaAmigos[amigoSecreto]}`
    } else {
        alert('Aun no agrega ningun amigo.')
    }
    
    
}


