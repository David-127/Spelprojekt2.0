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
var kill = false;



//funktioner för förflyttning
function flytta(obj){
    var bricka = obj.id;
    var ruta = obj.parentNode.id;
    var färg = obj.classList[0];

        if(färg === "brickaröd"){
            färg = "röd";
            var splita = bricka.split("-");
            var rad = parseInt(splita[0]);
            var column = parseInt(splita[1]);
            var temp = String(rad-1)+"-"+String(column+1); 
            var temp2 = String(rad-1)+"-"+String(column-1);

	    lastcolor ="röd";
            lastruta = ruta;


	    if (column != 8){
		var element = document.getElementById("ruta"+temp);
		element.classList.add('valbar');
	    }

	    if (column != 1) {			    
		var element2 = document.getElementById("ruta"+temp2);
		element2.classList.add('valbar');
	    }

            
	    if (column != 8) {
		valbarRutor[0] = element;
	    } else {
		// lastruta.classList.toggle('valbar');
		valbarRutor[0] = " ";
	    }

	    if (column != 1) {
		valbarRutor[1]= element2;
	    } else {
		valbarRutor[1] = " ";
	    }
	    
            if(valbarRutor[0].innerHTML!="" && valbarRutor[0] != " "){

		if(valbarRutor[0].childNodes[0].classList[0] != obj.classList[0]){


		    valbarRutor[0].classList.add('valbar');

		    var element_id = valbarRutor[0].id.split("a").pop();

		    rad = element_id.split("-")[0];
		    column = element_id.split("-")[1];

		    column = parseInt(column) + 1;
		    rad = parseInt(rad) - 1;

		    
		    var högerId = "ruta" + rad + "-" + column;
		    var höger = document.getElementById(högerId);
		    
		    if (element.classList.contains(obj.classList[0])) {
			console.log("samma färg");
		    }
		    
		    if (höger != null || höger != undefined) {

		    
		    if (höger.hasChildNodes()) {

			höger.classList.remove('valbar');

		    } else {

			höger.classList.add('valbar');
		    }

			höger.addEventListener('click',function() { valbarRutor[0].innerHTML = "";
								    valbarRutor[0] = "";
								  });

			console.log(höger);
			console.log(valbarRutor[0]);
			// höger.addEventListener('click', eventListen(0));
		    }
 		    valbarRutor[0].classList.remove('valbar');


                } 


		
            } if (valbarRutor[1].innerHTML != "" && valbarRutor[1] != " ") {

		if(valbarRutor[1].childNodes[0].classList[0] != obj.classList[0]){

		    console.log("röd vänster");
		    
		    valbarRutor[1].classList.add('valbar');
		    var element2_id = valbarRutor[1].id.split("a").pop();

		    rad = element2_id.split("-")[0];
		    column = element2_id.split("-")[1];

		    
		    
		    column = parseInt(column)- 1;
		    rad = parseInt(rad) - 1;

		    
		    var vänsterId = "ruta" + rad + "-" + column;
		    
		    var vänster = document.getElementById(vänsterId);

		    if (vänster != null || vänster != undefined) {
			
		    
			if (vänster.hasChildNodes()) {
			    vänster.classList.remove('valbar');

			} else {
			    vänster.classList.add('valbar');
			}
			valbarRutor[1].classList.remove('valbar');

			vänster.addEventListener('click',function() { valbarRutor[1].innerHTML = "";
								      valbarRutor[1] = "";
								    });
			console.log(vänster);
			console.log(valbarRutor[0]);
			// vänster.addEventListener('click', eventListen(1));
			
		    }
		    // vänster.classList.add('valbar');
		    valbarRutor[1].classList.remove('valbar');
		    
		}
		
	    }
	    
        }
         if(färg === "brickasvart"){
            färg="svart";
            var splita = bricka.split("-");
            var rad = parseInt(splita[0]);
            var column = parseInt(splita[1]);
            var temp = String(rad+1)+"-"+String(column+1); 
            var temp2 = String(rad+1)+"-"+String(column-1); 

            lastcolor = "svart";
            lastruta = ruta;


	     	    
	    if (column != 8){
		var element = document.getElementById("ruta"+temp);
		element.classList.add('valbar');
	    }

	    if (column != 1) {			    
		var element2 = document.getElementById("ruta"+temp2);
		element2.classList.add('valbar');
	    }

            
	    if (column != 8) {
		valbarRutor[0] = element;

	    } else {
		// lastruta.classList.toggle('valbar');
		valbarRutor[0] = " ";
		console.log(lastruta);
	    }

	    if (column != 1) {
		valbarRutor[1]= element2;
	    } else {
		valbarRutor[1] = " ";
	    }

	     
             if(valbarRutor[0].innerHTML!="" && valbarRutor[0] != " "){
		 console.log("höger svart");
		 if(valbarRutor[0].childNodes[0].classList[0] != obj.classList[0]){

		     valbarRutor[0].classList.add('valbar');
		    
		     var element_id = valbarRutor[0].id.split("a").pop();
		     
		     rad = element_id.split("-")[0];
		     column = element_id.split("-")[1];

		     column = parseInt(column)+ 1;
		     rad = parseInt(rad) +1;


		     var högerId = "ruta" + rad + "-" + column;
		     var höger = document.getElementById(högerId);

		     if (höger != null || höger != undefined) {

			 
			 if (höger.hasChildNodes()) {
			     höger.classList.remove('valbar');
			
			 } else {
			     höger.classList.add('valbar');
			 }
			 höger.addEventListener('click',function() {
			     valbarRutor[0].innerHTML = "";});
			 // höger.addEventListener('click', eventListen(0));
                     }
		     
		     valbarRutor[0].classList.remove('valbar');
		 }
		 
	     } if (valbarRutor[1].innerHTML != "" && valbarRutor[1] != " ") {

		     if(valbarRutor[1].childNodes[0].classList[0] != obj.classList[0]){
			 console.log("vänster svart");
			 valbarRutor[1].classList.add('valbar');
			 var element2_id = valbarRutor[1].id.split("a").pop();
			 
			 rad = element2_id.split("-")[0];
			 column = element2_id.split("-")[1];
			 
			 column = parseInt(column) - 1;
			 rad = parseInt(rad) + 1;

			 var vänsterId = "ruta" + rad + "-" + column;
			 var vänster = document.getElementById(vänsterId);


			if (vänster != null || vänster != undefined) {

			    if (vänster.hasChildNodes()) {
			    
				console.log("vänster svart has child");
				vänster.classList.remove('valbar');
				
			    } else{
				vänster.classList.add('valbar');
			    }

			    vänster.addEventListener('click',function() { valbarRutor[1].innerHTML = "";
									  valbarRutor[1] = "";
									});
			    // vänster.addEventListener('click', eventListen(1));
			}
			valbarRutor[1].classList.remove('valbar');
			
			
		    }
		
		}
	     
             }
       
	 }



const rutor = document.querySelectorAll('.ruta-svart , .ruta-röd');

// console.log(rutor);
rutor.forEach(ruta =>ruta.addEventListener("click",flytta2));
function flytta2(){
    if(this.classList.contains('valbar')){
        if(lastcolor == "röd"){
	    document.getElementById(lastruta).innerHTML="";		

	    if (valbarRutor[0] != " ") {
		// valbarRutor[0].classList.toggle('valbar');
		rutor.forEach(ruta => ruta.classList.remove('valbar'));


		    rutor.forEach(ruta => ruta.removeEventListener('click', eventListen));

		    // rutor.forEach(ruta =>ruta.removeEventListener("click",flytta2));


	    }

	    if (valbarRutor[1] != " ") {
		// valbarRutor[1].classList.toggle('valbar');
		rutor.forEach(ruta => ruta.classList.remove('valbar'));


		    rutor.forEach(ruta => ruta.removeEventListener('click', eventListen));


	    }


            var plats = this.id.split('a').pop();	   
            this.innerHTML= '<div class="brickaröd" id="'+plats+'" onclick = "flytta(this)"></div>';

        }
        else if(lastcolor == "svart"){
            document.getElementById(lastruta).innerHTML="";

	    if (valbarRutor[0] != " ") {
		rutor.forEach(ruta => ruta.classList.remove('valbar'));

		if (kill == true) {
		    rutor.forEach(ruta => ruta.removeEventListener('click', eventListen));
		    kill = false;
		}
	    }

	    if (valbarRutor[1] != " ") {
		rutor.forEach(ruta => ruta.classList.remove('valbar'));

		if (kill == true) {
		    rutor.forEach(ruta => ruta.removeEventListener('click', eventListen));
		    kill = false;
		}
	    }


            var plats = this.id.split('a').pop();
            this.innerHTML= '<div class="brickasvart" id="'+plats+'" onclick = "flytta(this)"></div>';
        }
    }
}




function eventListen(num){


    if (kill == true) {

	if (num == 0) {
	    console.log(valbarRutor[0]);
	    valbarRutor[0].innerHTML ="";
	} else {
	    console.log(valbarRutor[1]);
	    valbarRutor[1].innerHTML ="";
	}
	kill = false;
	
    }
    kill = true;
    
}


