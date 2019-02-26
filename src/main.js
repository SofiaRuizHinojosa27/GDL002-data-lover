function showAnualData(){
document.getElementById("AnualData").style.display = 'block';
}
document.getElementById("btnAnual").addEventListener('click',showAnualData);

function time(tipo){
  let yearAccident=window.datalover.yearAccident;
  let out= "<table class= 'finalTable'><tr><th>Año</th><th>Cantidad de accidentes</th></tr>";
  yearAccident.forEach((element)=> {out += "<tr><td>" + element.Year + "</td><td>"+ element[tipo] +"</td></tr>"; });
  document.getElementById("Results").innerHTML = out + "</table>";
}

document.getElementById("btnMoto").addEventListener('click',()=>{time("Motocicleta");});
document.getElementById("btnBike").addEventListener('click',()=>{time("Bicicleta");});
document.getElementById("btnCar").addEventListener('click',()=>{time("Automovil");});


function clean(){
  //document.getElementById("ResultsYear").value= "";
  document.getElementById("Results").innerHTML= "";
}
document.getElementById("Clean").addEventListener('click',clean);

/*function motoAccidents(){
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
}
document.getElementById("btnCar").addEventListener('click',carAccidents);*/
