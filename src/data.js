// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
window.example = example;
window.datalover = {
  // meter aqui el nombre de las funciones que ocupemos
  motoAccident:motoAccident(),
};

function motoAccident(){
    let listAccidentMoto=[];//nos dara el numero de accidentes ocurridos por año
    let listAccidentMotoYear=[];// da el año en donde ocurrio el accidente
    for(let i=0;i<INJURIES.length; i++){//contara el numero de arreglos existentes en nuestra data
      let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists;//realizara un valor de arreglo por cada accidente de moto
      let accidentMotoYear= INJURIES[i].Year;//encontrara los años en que estan representados los accidentes
      listAccidentMoto.push(accidentMoto);//subir a nuestra lista de accidentes de motos, los arreglos encontrados
      listAccidentMotoYear.push(accidentMotoYear);//subir a nuestra lista de años deaccidentes de motos, los arreglos encontrados
  }
  return listAccidentMoto;
}



// let listAccidentMoto=[];
// let listAccidentMotoYear=[];
// for(let i=0;i<INJURIES.length; i++){
// let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists;
// let accidentMotoYear= INJURIES[i].Year;
// listAccidentMoto.push(accidentMoto);
// listAccidentMotoYear.push(accidentMotoYear);
// };

let listAccidentBike=[];
// ejemplo que nos dio ANA
// listAccidentBike.forEach(element=>console.log(element));
let listAccidentBikeYear=[];
for(let i=0;i<INJURIES.length; i++){
  let accidentBike=INJURIES[i].Total_Injured_Persons_Pedalcyclists;
  let accidentBikeYear= INJURIES[i].Year;
  listAccidentBike.push(accidentBike);
  listAccidentBikeYear.push(accidentBikeYear);
};

let listAccidentCar=[];
let listAccidentCarYear=[];
for(let i=0;i<INJURIES.length; i++){
  let accidentCar=INJURIES[i].Total_Injured_Persons_Passenger_Car_Occupants;
  let accidentCarYear= INJURIES[i].Year;
  listAccidentCar.push(accidentCar);
  listAccidentCarYear.push(accidentCarYear);
};
