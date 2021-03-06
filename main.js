"use strict";
skapaBrickor();
//brickornas startposition

function skapaBrickor(){
//röda
//rad1    
document.getElementById('ruta1-2').innerHTML = '<div class="brickasvart" id="1-2" onclick = "flytta(this)"></div>';
document.getElementById('ruta1-4').innerHTML = '<div class="brickasvart" id="1-4" onclick = "flytta(this)"></div>';
document.getElementById('ruta1-6').innerHTML = '<div class="brickasvart" id="1-6" onclick = "flytta(this)"></div>';
document.getElementById('ruta1-8').innerHTML = '<div class="brickasvart" id="1-8" onclick = "flytta(this)"></div>';

//rad2
document.getElementById('ruta2-1').innerHTML = '<div class="brickasvart" id="2-1" onclick = "flytta(this)"></div>';
document.getElementById('ruta2-3').innerHTML = '<div class="brickasvart" id="2-3" onclick = "flytta(this)"></div>';
document.getElementById('ruta2-5').innerHTML = '<div class="brickasvart" id="2-5" onclick = "flytta(this)"></div>';
document.getElementById('ruta2-7').innerHTML = '<div class="brickasvart" id="2-7" onclick = "flytta(this)"></div>';

//rad3
document.getElementById('ruta3-2').innerHTML = '<div class="brickasvart" id="3-2" onclick = "flytta(this)"></div>';
document.getElementById('ruta3-4').innerHTML = '<div class="brickasvart" id="3-4" onclick = "flytta(this)"></div>';
document.getElementById('ruta3-6').innerHTML = '<div class="brickasvart" id="3-6" onclick = "flytta(this)"></div>';
document.getElementById('ruta3-8').innerHTML = '<div class="brickasvart" id="3-8" onclick = "flytta(this)"></div>';

//svarta
//rad6
document.getElementById('ruta6-1').innerHTML = '<div class="brickaröd" id="6-1" onclick = "flytta(this)"></div>';
document.getElementById('ruta6-3').innerHTML = '<div class="brickaröd" id="6-3" onclick = "flytta(this)"></div>';
document.getElementById('ruta6-5').innerHTML = '<div class="brickaröd" id="6-5" onclick = "flytta(this)"></div>';
document.getElementById('ruta6-7').innerHTML = '<div class="brickaröd" id="6-7" onclick = "flytta(this)"></div>';

//rad7
document.getElementById('ruta7-2').innerHTML = '<div class="brickaröd" id="7-2" onclick = "flytta(this)"></div>';
document.getElementById('ruta7-4').innerHTML = '<div class="brickaröd" id="7-4" onclick = "flytta(this)"></div>';
document.getElementById('ruta7-6').innerHTML = '<div class="brickaröd" id="7-6" onclick = "flytta(this)"></div>';
document.getElementById('ruta7-8').innerHTML = '<div class="brickaröd" id="7-8" onclick = "flytta(this)"></div>';


//rad8
document.getElementById('ruta8-1').innerHTML = '<div class="brickaröd" id="8-1" onclick = "flytta(this)"></div>';
document.getElementById('ruta8-3').innerHTML = '<div class="brickaröd" id="8-3" onclick = "flytta(this)"></div>';
document.getElementById('ruta8-5').innerHTML = '<div class="brickaröd" id="8-5" onclick = "flytta(this)"></div>';
document.getElementById('ruta8-7').innerHTML = '<div class="brickaröd" id="8-7" onclick = "flytta(this)"></div>';
}
//funktion för förflyttning
function flytta(obj){
    var bricka = obj.id;
    var ruta = obj.parentNode.id;
    var färg = obj.classList[0];
    if(färg === "brickaröd"){
        färg = "röd";
        let valbara=[];
        var splita = bricka.split("-");
        var rad = parseInt(splita[0]);
        var column = parseInt(splita[1]);
        var temp = String(rad-1)+"-"+String(column+1); 
        var temp2 = String(rad-1)+"-"+String(column-1); 
        var element = document.getElementById("ruta"+temp);
        element.classList.toggle('valbar');
        var element2 = document.getElementById("ruta"+temp2);
        element2.classList.toggle('valbar');
    }
    else if(färg === "brickasvart"){
        färg="svart";
    }
}



