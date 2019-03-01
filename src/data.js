window.datalover = {

  yearAccident:yearAccident()
 /* motoAccident:motoAccident(yearAcc),
  bikeAccident:bikeAccident(yearAcc),
  carAccident:carAccident(yearAcc) */

};

//const INJURIES = window.INJURIES;

function yearAccident(){
  let yearTime=[];
  for(let i=0;i<INJURIES.length; i++){
    let accidentYear={
      "Year":INJURIES[i].Year.substring(0,4),
      "Automovil":(INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants),
      "Motocicleta": (INJURIES[i].Total_Injured_Persons_Motorcyclists == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Motorcyclists),
      "Bicicleta" :  (INJURIES[i].Total_Injured_Persons_Pedalcyclists == null ? "sin datos": INJURIES[i].Total_Injured_Persons_Pedalcyclists)
    };

    yearTime.push(accidentYear);
  }
  return yearTime;
}

//esta funcion recorre toda la base de datos, trayendo el año (y quitandole el mes y el día a la fecha para solo mostrar el año con substring()), la cantidad de accidentes de carro (y pidiendole que cambie null por el mensaje de "sin datos" de ser el caso, usando un operador ternario), la cantidad de accidentes en motocicleta ("" "" "") y la cantidad de accidentes en bicicleta ("" "" "") y lo guarda en el arreglo yearTime, generando así un filtrado inicial de la base de datos original.

//

/*function motoAccident(yearAcc){
  let dataNew= yearAccident();
  let moto=dataNew[yearAcc].Motocicleta;
  return moto
},

function bikeAccident(yearAcc){
  let dataNew= yearAccident();
  let bike=dataNew[yearAcc].Bicicleta;
  return bike
},

function carAccident(yearAcc){
  let dataNew= yearAccident();
  let car=dataNew[yearAcc].Automovil;
  return car
};


/*let dataNew = yearAccident();
console.log(dataNew);



/*const example = () => {
  return 'example';
};
window.example = example;*/

// meter aqui el nombre de las funciones que ocupemos
// motoAccident:motoAccident(),
// bikeAccident:bikeAccident(),
// carAccident:carAccident(),

/*function motoAccident(){
    let listAccidentMoto=[];//nos dara el numero de accidentes ocurridos por año

    for(let i=0;i<INJURIES.length; i++){//contara el numero de arreglos existentes en nuestra data
      let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists;//realizara un valor de arreglo por cada accidente de moto
      listAccidentMoto.push(accidentMoto);//subir a nuestra lista de accidentes de motos, los arreglos encontrados
  // // ejemplo que nos dio ANA
  // // listAccidentBike.forEach(element=>console.log(element));
  }

  return listAccidentMoto;
}

function bikeAccident(){
  let listAccidentBike=[];
  for(let i=0;i<INJURIES.length; i++){
    let accidentBike=INJURIES[i].Total_Injured_Persons_Pedalcyclists;
    listAccidentBike.push(accidentBike);
  // // ejemplo que nos dio ANA
  // // listAccidentBike.forEach(element=>console.log(element));
  // let listAccidentBikeYear=[];
}
 return listAccidentBike;
}


function carAccident(){
  let listAccidentCar=[];
  for(let i=0;i<INJURIES.length; i++){
    let accidentCar=INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants;
    listAccidentCar.push(accidentCar);
  }
  return listAccidentCar;
}*/
