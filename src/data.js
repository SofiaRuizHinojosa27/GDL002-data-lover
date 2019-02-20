// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
window.example = example;
window.datalover = {
  // meter aqui el nombre de las funciones que ocupemos
};

let listAccidentMoto=[];
let listAccidentMotoYear=[];
for(let i=0;i<INJURIES.length; i++){
let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists;
let accidentMotoYear= INJURIES[i].Year;
listAccidentMoto.push(accidentMoto);
listAccidentMotoYear.push(accidentMotoYear);
};

let listAccidentBike=[];
// ejemplo que nos dio ANA
// listAccidentBike.forEach(elemento=>console.log(elemento));

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
