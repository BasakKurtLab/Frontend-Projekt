
var bilder = ["bild1.jpg", "bild2.jpg", "bild3.jpg"];
var texte = ["Musik - eine universelle Sprache!", "Musik ist Medizin für die Seele.", "Ohne Musik wäre das Leben ein Irrtum."];
const info = document.querySelector("#info");


 
var text = document.getElementById("text");
var bild = document.getElementById("bild");

const punkt = document.querySelector(".punkt");
const cross = document.querySelector("#info>i");


aktuel = 0;
var meinInterval;





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
        }, 4000);
          
}


        


function play(n) {
        clearInterval(meinInterval);
        
        buttonCheck(n);
        aktuel += n;
        
        bild.style.backgroundImage = `url('${bilder[aktuel]}')`;
        text.innerHTML = texte[aktuel];

        setTimeout(erst(aktuel), 3000);

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

    