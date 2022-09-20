class Dado { 
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
    
        }
    
    class Corredor{
    
        constructor(){    
    
        this.numeroDados = 0;   
    
            
        }
        avanzar(){
            let dado = new Dado();
            let lanzar = dado.lanzar();
    
              if(lanzar === 1){
                this.numeroDados +=3;
              } else if(lanzar === 4 || lanzar === 2 || lanzar === 3){
                this.numeroDados +=2;
              } else if(lanzar === 5 || lanzar === 6){
                this.numeroDados +=1;
              }
        }
    }
    
    let corredor1 = new Corredor();
    let corredor2 = new Corredor();
    
    do{
        corredor1.avanzar();
        corredor2.avanzar();
    
    
    
    
        if(corredor1.numeroDados >= 100 && corredor2.numeroDados >= 100){
            console.log(`corredor1 quedo empate con ${corredor1.numeroDados} puntos`);
            console.log(`corredor2 quedo empate con ${corredor2.numeroDados} puntos`);
    
             } else if ( corredor2.numeroDados >= 100){
                console.log(`corredor2 gano el juego con ${corredor2.numeroDados} puntos`);
                console.log(`corredor1 quedo en segundo lugar con ${corredor1.numeroDados} puntos`);
             } else if (corredor1.numeroDados >= 100){
                console.log(`corredor1 gano el juego con ${corredor1.numeroDados} puntos`);
                console.log(`corredor2 quedo en segundo lugar con ${corredor2.numeroDados} puntos`);
             }
    
            }  while(corredor1.numeroDados<100 && corredor2.numeroDados<100);