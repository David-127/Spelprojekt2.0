"use strict";
skapaBrickor();
//brickornas startposition
function skapaBrickor(){
//svarta
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

//röd
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
let lastcolor;
let lastruta;
let valbarRutor=[];
let lastId;



//funktioner för förflyttning
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
            lastcolor ="röd";
            lastruta = ruta;
            valbarRutor[0]= element;
            valbarRutor[1]=element2;
            if(element.innerHTML!=""){
                console.log(element.childNodes[0].classList[0]);
                console.log(obj.classList[0]);
                if(element.childNodes[0].classList[0] != obj.classList[0]){
                    
                }

            }      
        }
        else if(färg === "brickasvart"){
             färg="svart";
             var splita = bricka.split("-");
             var rad = parseInt(splita[0]);
             var column = parseInt(splita[1]);
             var temp = String(rad+1)+"-"+String(column+1); 
             var temp2 = String(rad+1)+"-"+String(column-1); 
             var element = document.getElementById("ruta"+temp);
             element.classList.toggle('valbar');
             var element2 = document.getElementById("ruta"+temp2);
             element2.classList.toggle('valbar');
             lastcolor = "svart";
             lastruta = ruta;
             valbarRutor[0]= element;
             valbarRutor[1]=element2;
        }
       
}
const rutor = document.querySelectorAll('.ruta-svart');
rutor.forEach(ruta =>ruta.addEventListener("click",flytta2));
function flytta2(){
    if(this.classList.contains('valbar')){
        if(lastcolor == "röd"){
         document.getElementById(lastruta).innerHTML="";
         valbarRutor[0].classList.toggle('valbar');
         valbarRutor[1].classList.toggle('valbar');
        var plats = this.id.split('a').pop();
        this.innerHTML= '<div class="brickaröd" id="'+plats+'" onclick = "flytta(this)"></div>';
        }
        else if(lastcolor == "svart"){
            document.getElementById(lastruta).innerHTML="";
            valbarRutor[0].classList.toggle('valbar');
            valbarRutor[1].classList.toggle('valbar');
            var plats = this.id.split('a').pop();
            this.innerHTML= '<div class="brickasvart" id="'+plats+'" onclick = "flytta(this)"></div>';
        }
    }
}






