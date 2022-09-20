class Dado { 
    lanzar(){
        return Math.floor(Math.random()*6)+1;
    }
    
}
       /*
        let dado = new Dado();
        let contadores = [0,0,0,0,0,0];
       
    
        for(let i=0; i<=100; i++){ 

           let num = 0;
            num = dado.lanzar();
            contadores[num-1]++;

    }

        for(let i = 0; i < 6; i++){
            console.log(`El numero ${i+1} se repitio un total de ${contadores[i]} veces`);
        }
    
*/

/*
let dado = new Dado();
        let contadores = [0,0,0,0,0,0,0,0,0,0,0];
       
    
        for(let i=0; i<=100; i++){ 

           let suma = 0;
            suma = dado.lanzar() + dado.lanzar();
            contadores[suma-2]++;

    }

        for(let i = 0; i < 11; i++){
            console.log(`El numero ${i+2} se repitio un total de ${contadores[i]} veces`);
        }

*/
