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