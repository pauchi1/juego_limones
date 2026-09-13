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
let VelocidadLimon = 600;

function iniciar() {
    setInterval(bajarLimon, VelocidadLimon);//primer parametro: una funcion como tal, segundo parametro: tiempo en milisegundos
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
    ctx.fillStyle="#EBBD6C";
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
        mostrarEnSpan("txtPuntaje",puntaje);
    }
}

function detectarPiso() {
    if (limonY + ALTURA_LIMON == canvas.height-ALTURA_SUELO) {
        aparecerLimon();
        vidas = vidas - 1;
        mostrarEnSpan("txtVidas", vidas);
    }
}

function aparecerLimon() {
    limonX = generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}