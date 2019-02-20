
function motoAccidents(){

  let listMoto=window.datalover.motoAccident;
  //console.log(listMoto);
  document.getElementById("Results").value= listMoto;
  //document.getElementById("ResultsYear").value=listAccidentMotoYear;
}

document.getElementById("btnMoto").addEventListener('click',motoAccidents);

function bikeAccidents(){
  let listBike=window.datalover.listAccidentBike;
  document.getElementById("ResultsYear").value=listAccidentBikeYear;
  document.getElementById("Results").value=listAccidentBike;
  }
document.getElementById("btnBike").addEventListener('click',bikeAccidents);

function carAccidents(){
  let listBike=window.datalover.listAccidentCar;
  document.getElementById("ResultsYear").value=listAccidentCarYear;
  document.getElementById("Results").value=listAccidentCar;
  }
document.getElementById("btnCar").addEventListener('click',carAccidents);

function clean(){
  document.getElementById("ResultsYear").value="";
  document.getElementById("Results").value="";
}
document.getElementById("Clean").addEventListener('click',clean);

// function anualData(){
//   document.getElementById("pag1").style.display="none";
//   document.getElementById("AnualData").style.display="block";
// }
// document.getElementById("btnAnual").addEventListener('click',anualData);

