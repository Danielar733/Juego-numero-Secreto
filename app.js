let numeroMaximo = 100;
let listaNumerosSorteados = [];
let NumeroSecreto = 0;
let intentos = 1;
let numeroMaximoIntentos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    if (numeroDeUsuario == NumeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero, en  ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > NumeroSecreto) {
            asignarTextoElemento('p', 'el numero es menor')
        } else {

            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    
    }
    return;
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroGenerado)
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "ya se sorteron todo los numeros posibles");
    } else {
        //si el numero genrado esta incluido en la lista hacemos una operacion
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesInicales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del uno al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('intentar').removeAttribute('disabled')
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio
    //incializar wl numero de intetos 
    condicionesInicales();
    //Desahabilitar el boton nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
if(listaNumerosSorteados.length >= numeroMaximoIntentos){
    asignarTextoElemento('p',`llegaste al numero maximo de ${numeroMaximoIntentos} intentos de numeros a advinar`);
        document.querySelector('#reiniciar').setAttribute('disabled', 'true');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    }
    return;
}

condicionesInicales();




