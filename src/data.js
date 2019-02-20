// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
window.example = example;
window.datalover = {
  // meter aqui el nombre de las funciones que ocupemos
};
showMoto: function (){
        let listAccidentMoto=[]; //este es el arreglo vacio donde vamos a guardar la cantidad en # de accidentes        
        let listAccidentMotoYear=[]; //este arreglo vacio es donde se guardan los años en los que aparece los accidentes de moto
        for(let i=0;i<INJURIES.length; i++){ // este ciclo for cuenta a lo largo de todo INJURIES 
        let accidentMoto=INJURIES[i].Total_Injured_Persons_Motorcyclists; //le pedimos aquí todos los Total_Injured_Persons_Motorcyclists
        let accidentMotoYear= INJURIES[i].Year; //le pedimos aquí todos los Year  
        listAccidentMoto.push(accidentMoto); //llena el arreglo "listAccidentMoto" con la variable "accidentMoto"
        listAccidentMotoYear.push(accidentMotoYear); //llena el arreglo "listAccidentMotoYear" con la variable "accidentMotoYear"
}

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
