
window.onscroll=function(){
    this.scrollHeader();
}

// Dinamicka lista 
let nizNav = ["POČETNA", "O NAMA", "KONTAKT"];
let nizLink = ["index.html", "about.html", "#vrste"];
let meni = "";
meni += "<ul id='meni'>";
for (let i in nizNav) {
    meni += `<li><a href=${nizLink[i]}>${nizNav[i]}</a></li>`;
}
meni += "</ul>";
document.getElementById("nav").innerHTML = meni;

//Tekst na coveru
let coverTekst = document.querySelector("#coverTxt");
coverTekst.innerHTML="<h1>ZLATNA TAJNA</h1>";
coverTekst.classList.add("coverTekst");

//Dodavanje slike i teksta gornjem panelu sa desne strane 
let panelGoreDesno=document.querySelectorAll(".panelVeci")[0];
panelGoreDesno.innerHTML="<h2>UKUS PRIRODE</h2>";
panelGoreDesno.classList.add("panelGoreDesno");

//Dodavanje slike i teksta gornjem panelu sa leve strane
let panelGoreLevo= document.querySelectorAll(".panelManji")[0];
panelGoreLevo.innerHTML="<h2><a href='http://medkaolek.com/'>MED KAO LEK</a></h2>";
panelGoreLevo.classList.add("panelGoreLevo");

//Dodavanje slike i teksta donjem panelu sa leve strane
let panelDoleLevo= document.querySelectorAll(".panelVeci")[1];
panelDoleLevo.innerHTML="<h2>PROBAJ I OSETI RAZLIKU</h2>";
panelDoleLevo.classList.add("panelDoleLevo");

//Dodavanje teksta donjem panelu sa desne strane
let panelDoleDesno = document.querySelectorAll(".panelManji")[1];
/*panelDoleDesno.innerHTML="<h2>PROBAJ I OSETI RAZLIKU</h2>";*/
panelDoleDesno.classList.add("panelDoleDesno");

//Kreiranje obavestenja o medu
let panelObavestenje = document.createElement("div");
panelObavestenje.classList.add("obavestenje");
panelObavestenje.innerHTML="<h2><b>SASTAV MEDA</b></h2></br>Fruktoza 38 %<br/>Glukoza 31 %<br/>Saharoza 10 %<br/>Voda 17 %<br/>Pepeo 0,17 %<br/>Ostalo 3,83 %";
/*let sadrzajObavestenje=document.createTextNode("SASTAV MEDA");
panelObavestenje.appendChild(sadrzajObavestenje);*/
let pozicija = document.getElementById("centar");
pozicija.appendChild(panelObavestenje);

//Dodavanje meda
let med1=document.querySelectorAll(".med")[0];
med1.classList.add("med1");

let med2=document.querySelectorAll(".med")[1];
med2.classList.add("med2");

let kontakt=document.querySelector(".kontakt");
kontakt.innerHTML="<h1>KONTAKT INFO</h1><br/><br/><p><i class='fa fa-location-arrow'></i><br/><a href='https://www.google.com/maps/place/%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D0%BA%D0%B0+%D0%A7%D0%B5%D0%BB%D0%B0%D1%80%D0%B0+16,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.8146247,20.4816913,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7a9609031735:0x4b2dd3d867d041a!8m2!3d44.8146247!4d20.48388'>Zdravka Pčelara 16</a><br/><br/><i class='fa fa-envelope-open'></i><br/>zlatnatajna@gmail.com<br/><br/><i class='fa fa-volume-control-phone'></i><br/>063/122-63-55</p>";
kontakt.classList.add("con");

//Skrol funkcija za header
var header=document.getElementsByTagName("header")[0];
function scrollHeader(){
    if(document.body.scrollTop>550 || document.documentElement.scrollTop>550){
        header.style.height="110px";
        header.style.background="rgba(0,0,0, 0.6)";
    }else{
        header.style.height="140px";
        header.style.background="none";
    }
}

//Social-network
let sN = document.querySelectorAll(".panelManji")[2];
sN.innerHTML="<h1><i class='fa fa-chevron-circle-down'></i> POTRAŽITE NAS <i class='fa fa-chevron-circle-down'></i></h1><br/><h2><a href='https://www.facebook.com/'><i class='fa fa-facebook-square'></i></a><br/><br/><a href='https://www.instagram.com/'><i class='fa fa-instagram'></i></a><br/><br/><a href='sitemap.xml'><i class='fa fa-sitemap'></i></a></h2>";
sN.classList.add("social");

//jQuery slider
$(document).ready(function(){
    $("#prikazi").click(function(){
      $("#pvise").slideToggle("slow");
    });
  });

  let pvise= document.getElementById("pvise");
  pvise.innerHTML="<p>Med je gusta slatka sirupasta materija, proizvod medonosnih pčela.Med dobija svoju slatkoću od monosaharida fruktoze i glukoze.On ima atraktivna hemijska svojstva za pečenje i osobeni ukus zbog čega neki ljudi preferiraju med u onosu na šećer i druge zaslađivače...</p>";

  let prikaz= document.getElementById("prikazi");
  prikaz.innerHTML="VIŠE O MEDU";

  let copyR = document.getElementsByTagName("footer")[0];
  copyR.textContent="Copyright © 2019 Nikola Brzovan";


    
   
    
    
    