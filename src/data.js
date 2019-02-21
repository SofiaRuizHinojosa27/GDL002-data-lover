// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
window.example = example;
window.datalover = {
  // meter aqui el nombre de las funciones que ocupemos
  motoAccident:motoAccident(),
  bikeAccident:bikeAccident(),
  carAccident:carAccident()

};

function motoAccident(){
    let listAccidentMoto=[];//nos dara el numero de accidentes ocurridos por año

    for(let i=0;i<INJURIES.length; i++){//contara el numero de arreglos existentes en nuestra data
      let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists + "Total de accidentes ocurridos en el año " + INJURIES[i].Year;//realizara un valor de arreglo por cada accidente de moto
      listAccidentMoto.push(accidentMoto);//subir a nuestra lista de accidentes de motos, los arreglos encontrados
  }
  // // ejemplo que nos dio ANA
  // // listAccidentBike.forEach(element=>console.log(element));
  return listAccidentMoto;
}

function bikeAccident(){
  let listAccidentBike=[];
  // // ejemplo que nos dio ANA
  // // listAccidentBike.forEach(element=>console.log(element));
  // let listAccidentBikeYear=[];
  for(let i=0;i<INJURIES.length; i++){
    let accidentBike=INJURIES[i].Total_Injured_Persons_Pedalcyclists;
    listAccidentBike.push(accidentBike);
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
}
