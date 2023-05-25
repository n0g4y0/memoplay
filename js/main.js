class Tarjeta{
    constructor(color){
        this._color = color;
    }
    get color(){
        return this._color;
    }
    
    get value(){
        return  this.color[0].toUpperCase();
    }
}

let ronda = 0;
let tarjetasDeJuego = [];
let tarjetas = tarjetasAlAzar();
let comparador = [];

llenarTableroConTarjetasAleatoriamente(tarjetas);
desbloquearInputUsuario();
document.querySelector('button[type=button]').onclick = reiniciarEstado;


function tarjetasAlAzar(){
    let res = [new Tarjeta("red"),new Tarjeta("red"),
                new Tarjeta("yellow"),new Tarjeta("yellow"),
                new Tarjeta("blue"),new Tarjeta("blue"),
                new Tarjeta("black"),new Tarjeta("black"),
                new Tarjeta("green"),new Tarjeta("green"),
                new Tarjeta("white"),new Tarjeta("white")
            ];
    let pasada01 = res.sort(() => Math.random() -0.5);
    return pasada01.sort(() => Math.random() -0.5);
}

function llenarTableroConTarjetasAleatoriamente(valores){
    let element = document.createElement("section");
    let $tablero = document.querySelector('#tablero');

    for(let i = 0; i < valores.length; i++){

        element  = document.createElement("section");
        element.classList.add("tarjeta");
        element.classList.add("border");
        element.classList.add("border-dark");
        element.classList.add(`default`);

        element.value = valores[i].color;
        
        $tablero.appendChild(element);
    }
}
function manejarInputUsuario(e){
    const $tarjeta = e.target;
    resaltar($tarjeta);
    comparador.push($tarjeta);

    if(comparador.length === 2){
        verificarEstadoTarjetas(comparador);
        ronda++;
        actualizarNumeroIntentos(ronda);
        comparador = [];
    }

}

function verificarEstadoTarjetas(comparador){
    
    if(comparador[0].value === comparador[1].value){
        comparador[0].classList = "";
        comparador[0].classList.add("tarjeta");
        comparador[0].classList.add("disabled");
        comparador[1].classList = "";
        comparador[1].classList.add("tarjeta");
        comparador[1].classList.add("disabled");
    }else{
        comparador[0].classList = "tarjeta border border-dark default";
        comparador[1].classList = "tarjeta border border-dark default";
    
    }
}

function resaltar($tarjeta){
    $tarjeta.classList.remove('default');
    $tarjeta.classList.add(`${$tarjeta.value}`);

}

function desbloquearInputUsuario() {
    document.querySelectorAll('.tarjeta').forEach(function($tarjeta) {
      $tarjeta.onclick = manejarInputUsuario;
    });
}
function actualizarNumeroIntentos(ronda){
    document.querySelector('#ronda').textContent = ronda;
}
function reiniciarEstado(){
    eliminarNodos();
    ronda = 0;
    actualizarNumeroIntentos(ronda);
    tarjetasDeJuego = [];
    tarjetas = tarjetasAlAzar();
    comparador = [];
    llenarTableroConTarjetasAleatoriamente(tarjetas);
    desbloquearInputUsuario();

}
function eliminarNodos(){
    let $tablero = document.querySelector('#tablero');
    while($tablero.hasChildNodes()){
        $tablero.removeChild($tablero.firstChild);
    }
}