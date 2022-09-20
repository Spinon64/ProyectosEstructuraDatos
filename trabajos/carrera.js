class Tortuga{
    constructor(){
        this.avance = 0;
}


info(){
    return "la tortuga esta en " + this.avance;
}

avanzar(){
    let probTortuga = Math.random()*100 + 1;


    if(probTortuga <= 50){
        this.avance  += 3;
    } else if (probTortuga <= 70){
        this.avance  -= 6;
    } else {
        this.avance ++;

    }
    } 

}



class Liebre{ 
    constructor(){
        this.avance = 0;
    }

info(){
    return "la liebre esta en " + this.avance;
}


avanzar(){

    let probLiebre = Math.random()*100 + 1;

    if(probLiebre <= 20){
        this.avance  += 9;
    } else if (probLiebre <= 30){
        this.avance  -= 12;
    } else if(probLiebre <= 65){
        this.avance  ++ ;
    } else if (probLiebre = 80){
        this.avance  -= 2;
    }
    

}

}

let liebre = new Liebre();
let tortuga = new Tortuga();

 while(liebre.avance < 100 && tortuga.avance <  100){
        liebre.avanzar();
        tortuga.avanzar();
            console.log(liebre.info() + " " + tortuga.info() );
 } 

 if (liebre.avance >= 100 && tortuga.avance >= 100){
    console.log("Quedaron Empate");
 } else if(liebre.avance >= 100)
 console.log("Gano la liebre " + liebre.info());
    else{
        console.log("Gano la tortuga" + " " + tortuga.info());
    }

