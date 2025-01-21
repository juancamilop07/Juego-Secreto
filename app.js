let numeroSecreto = 0;;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoValor(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoValor('p',`acertaste en ${intentos} ${(intentos == 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoValor('p','El número secreto es menor');
        } else {
            asignarTextoValor('p','El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoValor('p',`Ya encontraste los ${numeroMaximo} números posibles`);
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoValor('h1',"Juego actualizado");
    asignarTextoValor('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){

    //limpiar caja
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
 
condicionesIniciales();
