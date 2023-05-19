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


