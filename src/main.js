
function motoAccidents(){
  let listMoto=window.datalover.listAccidentMoto;
  document.getElementById("ResultsYear").value=listAccidentMotoYear;
  document.getElementById("Results").value=listAccidentMoto;
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
