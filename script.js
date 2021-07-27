AOS.init();

var bilder = ["images/bild1.jpg", "images/bild2.jpg", "images/bild3.jpg"];
var texte = ["Musik - eine universelle Sprache!", "Musik ist Medizin für die Seele.", "Ohne Musik wäre das Leben ein Irrtum."];
const info = document.querySelector("#info");


 
var text = document.getElementById("text");
var bild = document.getElementById("bild");

const punkt = document.querySelector(".punkt");
const cross = document.querySelector("#info>i");

const nav = document.getElementById("nav");
let menuOn = false;




aktuel = 0;
var meinInterval;


function play(n) {
    clearInterval(meinInterval);
    
    buttonCheck(n);
    aktuel += n;
    
    bild.style.backgroundImage = `url('${bilder[aktuel]}')`;
    text.innerHTML = texte[aktuel];

    setTimeout(erst(aktuel), 3000);

}


function erst(i) {

        if (i == 0) {
                bild.style.backgroundImage = `url('${bilder[i]}')`;
                text.innerHTML = texte[i];


        }
        
        meinInterval = setInterval(function ()
        {aktuel = i;
               
                i++;
              
        
                if (i == bilder.length)
                        i = 0;
                
                bild.style.backgroundImage = `url('${bilder[i]}')`;
               

                
                text.innerHTML = texte[i];
        }, 3000);
          
}


        






function buttonCheck(x)
{
    if(aktuel == bilder.length-1 && x == 1) 
    {
        
        aktuel = -1;
    }

    if(aktuel == 0 && x == -1) 
    {
        aktuel = bilder.length;
    }

    return false; 

}

punkt.onclick=function () {
 info.style.transform = "translateX(0)";
         
}
cross.onclick= function() {
        info.style.transform = "translateX(200vw)";
        
}

    
function more(button) {
   
    let profil = button.parentElement.getElementsByClassName("profil")[0];

    
    if (profil.style.maxHeight) {
        
        profil.style.maxHeight = null;

        button.style.borderBottomLeftRadius = "6px";
        button.style.borderBottomRightRadius = "6px";
        
    }
    else {
        profil.style.maxHeight = profil.scrollHeight + "px";
        button.style.borderBottomLeftRadius = "0";
        button.style.borderBottomRightRadius = "0";

       
       
        
    }
    
}


let last ;

function aktivieren(element) {
      
        

        if (element.classList.contains("aktiv") == false)

        {       
            element.classList.add("aktiv");

            if (nav.style.height = "250px") {
                nav.style.height = "65px";
                menuOn = !menuOn;
            }
            

    
            if (last != null)
            {
                    last.classList.remove("aktiv");
                    
            }
             
                last = element;
        }

        
    
        
        
}
    

const fotoG = document.querySelectorAll("#fotos>img");
const bigFoto = document.querySelector("#bigBox img");
const bigBox = document.querySelector("#bigBox");
const fotoCross = document.querySelector("#bigBox i");

fotoG.forEach(
    function (element) {
        element.onclick = function () {
            
            bigBox.style.transform = "translateX(0)";
            const source = element.getAttribute("src");
            bigFoto.setAttribute("src", source);

            setTimeout(function()
            {
                bigFoto.style.transform = "scale(1)";
            }, 500);


        }

    });

fotoCross.onclick = function () {

    bigFoto.style.transform = "scale(0)";
    
    setTimeout(function () {
        
        bigBox.style.transform = "translateY(-100vh)";

    }, 500);
    

}


function menuShow() 
    
    {
        if(menuOn)
            nav.style.height = "65px";
        else
            nav.style.height = "250px";
    
            menuOn = !menuOn;
}


const mybutton = document.getElementById("scrollBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}