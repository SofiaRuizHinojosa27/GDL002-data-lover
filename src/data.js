window.datalover = {
  
  yearAccident:yearAccident()

};

function yearAccident(){
  let yearTime=[];//nos dara el numero de accidentes ocurridos por año
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
 
let dataNew = yearAccident();
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
