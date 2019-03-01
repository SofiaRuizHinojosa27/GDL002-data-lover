function showAnualData(){
document.getElementById("AnualData").style.display = 'block';
}
document.getElementById("btnAnual").addEventListener('click',showAnualData);

function showCompare(){
document.getElementById("compare").style.display = 'block';
}
document.getElementById("btnCompare").addEventListener('click',showCompare);


function time(tipo){
  let yearAccident=window.datalover.yearAccident(INJURIES);
  let out= "<table class= 'finalTable'><tr><th>Año</th><th>Cantidad de accidentes</th></tr>";
  yearAccident.forEach((element)=> {out += "<tr><td>" + element.Year + "</td><td>"+ element[tipo] +"</td></tr>"; });
  document.getElementById("Results").innerHTML = out + "</table>";
}

document.getElementById("btnMoto").addEventListener('click',()=>{time("Motocicleta");});
document.getElementById("btnBike").addEventListener('click',()=>{time("Bicicleta");});
document.getElementById("btnCar").addEventListener('click',()=>{time("Automovil");});

function compare(contra,Year){
  let yearAccident=window.datalover.yearAccident(INJURIES)[Year];
  document.getElementById("lblYear").innerHTML = yearAccident.Year;
  document.getElementById("lblBici").innerHTML= yearAccident.Bicicleta;
  document.getElementById("lblResult").innerHTML= yearAccident[contra];
  document.getElementById("lblTransport").innerHTML = contra;
  document.getElementById("lblDiference").innerHTML = yearAccident[contra] - yearAccident.Bicicleta;
  /*let out= "<table class= 'finalTable2'><tr><th></th><th></th></tr>";
  out += "<tr><td>" + yearAccident.Bicicleta + "</td><td>"+ yearAccident[contra] +"</td></tr>";
  document.getElementById("resultsCompare").innerHTML = out + "</table>"; */
}

document.getElementById("compareMoto").addEventListener('click',()=>{compare("Motocicleta",document.getElementById("yearValue").value);});
document.getElementById("compareCar").addEventListener('click',()=>{compare("Automovil",document.getElementById("yearValue").value);});

/*function calcule(obj){
  let dataSort = window.datalover.yearAccident.sort(
    (a,b)=>{
      if(a[obj] < b[obj])
        return 1; 
      else if(a[obj] > b[obj])
        return -1;
      else
        return 0;
    }
  );
  let dataFilter = dataSort.filter((element)=>{return element[obj] != "sin datos";});
  document.getElementById("lblBike").innerHTML = dataFilter[0][obj];
  
} 

document.getElementById("experiment").addEventListener('click',()=>{calcule("Motocicleta");});
  
 /* let yearAccident= window.datalover.yearAccident[Year];
  let bikeNumber = yearAccident.Bicicleta;
  let motoNumber = yearAccident.Motocicleta;
  let carNumber = yearAccident.Automovil;
  let promedie = (carNumber/motoNumber) * 100;
  console.log(promedie); */


//console.log("prueba de operacion" + promedie); */




function clean(){
  document.getElementById("resultsCompare").innerHTML="";
  document.getElementById("lblYear").innerHTML = "";
  document.getElementById("lblBici").innerHTML= "";
  document.getElementById("lblResult").innerHTML= "";
  document.getElementById("lblTransport").innerHTML = "";
  document.getElementById("lblDiference").innerHTML = "";
  document.getElementById("Results").innerHTML="";
  
}
document.getElementById("Clean").addEventListener('click',clean);
document.getElementById("Clean2").addEventListener('click',clean);

function goBack(){
  document.getElementById("AnualData").style.display = 'none';
  document.getElementById("compare").style.display = 'none';
}
document.getElementById("btnback").addEventListener('click',goBack);
document.getElementById("btnback2").addEventListener('click',goBack);
  


/*function bikeCompare(){
  let yearAcc= parseInt(document.getElementById("yearValue").value);
  let bikeCompareAccid= window.datalover.bikeAccident(yearAcc);
  document.getElementById("prueba").value= bikeCompareAccid;
}

document.getElementById("compareMoto").addEventListener('click',bikeCompare);
document.getElementById("compareCar").addEventListener('click',bikeCompare);

function carCompare(){
  let yearAcc= parseInt(document.getElementById("yearValue").value);
  let carCompareAccid= window.datalover.carAccident(yearAcc);
  document.getElementById("prueba").value= carCompareAccid;
}

document.getElementById("compareMoto").addEventListener('click',carCompare);
/*document.getElementById("compareCar").addEventListener('click',bikeCompare);



/*function clean(){
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
