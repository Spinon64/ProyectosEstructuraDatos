class Dado { 
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
    
}

class Jugador {
    constructor(){
        this.avance = 0;
        
}
    avanzar(){
        
    }
}

let jugador1 = new Jugador();
let jugador2 = new Jugador();

jugador1.avanzar();
/*
avanzar(){ 

    let dado = new Dado();
    let contador = [0];
    let suma = 0;
    suma = dado.lanzar() + dado.lanzar();
    contador


}
*/

