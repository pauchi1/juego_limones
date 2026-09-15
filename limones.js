let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON = 20;
const ALTURA_LIMON = 20;

let personajeX = canvas.width/2;
let personajeY = canvas.height-(ALTURA_SUELO + ALTURA_PERSONAJE);
let limonX = canvas.width/2;
let limonY = 0;
let puntaje = 0;
let vidas = 3;
let VelocidadCaida = 200;
let intervalo;

function iniciar() {
    intervalo = setInterval(bajarLimon,VelocidadCaida)//primer parametro: una funcion como tal, segundo parametro: tiempo en milisegundos
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();
}

function actualizarPantalla() {
    limpiarcanva();
    dibujarPersonaje();
    dibujarSuelo();
    dibujarLimon();
}

function dibujarSuelo() {
    ctx.fillStyle ="#FFB9AB";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle="#6cebe1";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function moverIzquierda() {
    personajeX = personajeX - 10;
    actualizarPantalla();
}

function moverDerecha() {
    personajeX = personajeX + 10;
    actualizarPantalla();
}

function limpiarcanva() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarLimon() {
    ctx.fillStyle="#76f072";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon() {
    limonY = limonY + 10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}

function detectarAtrapado() {
    if (limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTURA_LIMON > personajeY && 
        limonY < personajeY + ALTURA_PERSONAJE) {
        aparecerLimon();
        puntaje = puntaje + 1;
        mostrarEnSpan("txtPuntaje", puntaje);
        if (puntaje == 3) {
            VelocidadCaida = 150;
        } else if (puntaje == 6) {
            VelocidadCaida = 100;
        } else if (puntaje == 10) {
            alert("YA TIENES PARA HACER LA LIMONADA, AHORA BUSCA EL AZUCAR PARA LA LIMONTODO!!!");
            clearInterval(intervalo);
        }
    }
}

function detectarPiso() {
    if (limonY + ALTURA_LIMON == canvas.height-ALTURA_SUELO) {
        aparecerLimon();
        vidas = vidas - 1;
        mostrarEnSpan("txtVidas", vidas);
        if (vidas == 0){
            alert("HAS PERDIDO");
            clearInterval(intervalo);
        }
    }
}

function aparecerLimon() {
    limonX = generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}

function reiniciar() {
    vidas = 3;
    puntaje = 0;
    VelocidadCaida = 200;
    mostrarEnSpan("txtPuntaje", puntaje);
    mostrarEnSpan("txtVidas", vidas);
    iniciar();
}

function desaparecerPersonaje() {
    ctx.clearRect(personajeX, personajeY, ALTURA_PERSONAJE, ANCHO_PERSONAJE);
    console.log("boton funcionando");
}