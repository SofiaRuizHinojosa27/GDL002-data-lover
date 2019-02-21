// function time(){
//   let yearAccident=window.datalover.accidentYear;
//   document.getElementById("ResultsYear").value= yearAccident;
// }
// document.getElementById("btnMoto").addEventListener('click',time);

function motoAccidents(){
  let listMoto=window.datalover.motoAccident;
  document.getElementById("Results").value= listMoto;
}
document.getElementById("btnMoto").addEventListener('click',motoAccidents);

function bikeAccidents(){
  let listBike=window.datalover.bikeAccident;
  document.getElementById("Results").value=listBike;
  }
document.getElementById("btnBike").addEventListener('click',bikeAccidents);

function carAccidents(){
  let listCar=window.datalover.carAccident;
  document.getElementById("Results").value=listCar;
  }
document.getElementById("btnCar").addEventListener('click',carAccidents);

function clean(){
  document.getElementById("ResultsYear").value= "";
  document.getElementById("Results").value= "";
}
document.getElementById("Clean").addEventListener('click',clean);


// function anualData(){
//   document.getElementById("pag1").style.display="none";
//   document.getElementById("AnualData").style.display="block";
// }
// document.getElementById("btnAnual").addEventListener('click',anualData);
