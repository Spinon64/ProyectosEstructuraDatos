let numPrimos = new Array;

  for(let i = 0; i < 1000; i++){
    numPrimos.push(true);
   
  }

  for(let i = 2; i < 1000; i++){
    if(numPrimos[i]) {
      for(let j = 2; i * j < 1000; j++){
        numPrimos[i*j] = false;
      }
    }
  }

  for(let i = 2; i < 1000; i++){
    if(numPrimos[i] == true){
      console.log(`Estos son los numeros primos: ${i}`);
    }
  }