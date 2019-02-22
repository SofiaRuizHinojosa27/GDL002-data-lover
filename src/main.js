
function showAnualData(){
document.getElementById("AnualData").style.display = 'block';
}
document.getElementById("btnAnual").addEventListener('click',showAnualData);


function time(){
  let yearAccident=window.datalover.yearAccident;
yearAccident.forEach(element=>document.getElementById("ResultsYear").value += element + "\n");
}

document.getElementById("btnMoto").addEventListener('click',time);
document.getElementById("btnBike").addEventListener('click',time);
document.getElementById("btnCar").addEventListener('click',time);

function motoAccidents(){
  let listMoto=window.datalover.motoAccident;
listMoto.forEach(element=>document.getElementById("Results").value += element + "\n");
}
document.getElementById("btnMoto").addEventListener('click',motoAccidents);

function bikeAccidents(){
  let listBike=window.datalover.bikeAccident;
  listBike.forEach(element=>document.getElementById("Results").value += element + "\n");

}

document.getElementById("btnBike").addEventListener('click',bikeAccidents);

function carAccidents(){
  let listCar=window.datalover.carAccident;
  listCar.forEach(element=>document.getElementById("Results").value += element + "\n");

document.getElementById("btnCar").addEventListener('click',carAccidents);

function clean(){
  document.getElementById("ResultsYear").value= "";
  document.getElementById("Results").value= "";
}
document.getElementById("Clean").addEventListener('click',clean);
