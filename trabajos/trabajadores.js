
function hms2segs(h,m,s){ 
   let hora = h * 3600;
   let minuto = m * 60;
   let suma = 0;
      suma = hora + minuto + s;
   return suma;
}

let entradaTrabajador = hms2segs(3,20,0);
let salidaTrabajador = hms2segs(10,50,20);


 let positivo = 0;
   if(entradaTrabajador > salidaTrabajador){
      positivo = entradaTrabajador - salidaTrabajador;
   } else {
      positivo = salidaTrabajador - entradaTrabajador;
   }


   function convertirHMS(positivo){
      let horas = Math.floor(positivo / 3600);
      let minutos = Math.floor((positivo - (horas * 3600)) / 60);
      let segundos = positivo - (horas * 3600) - (minutos * 60);

      if(horas < 10) {horas  = "0"+horas;}
      if(minutos < 10) {minutos  = "0"+minutos;}
      if(segundos < 10) {segundos  = "0"+segundos;}

      return horas+":"+minutos+":"+segundos;
   }

 
   console.log(convertirHMS(positivo));

