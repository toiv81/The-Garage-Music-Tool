
var c = 0;
var t;
var timer_is_on = 0;
var a = 0

var sw = 0

var colori = ["black","darkblue", "orange", "yellow", "white"];
var matrix1 = 0
var matrix2 = 0

function timedCount(
  a = document.getElementById("myRange").value
  )
  
{
  document.getElementById("txt").value = "Speed ms:" + a + " Loops:" + c;
  c = c + 1;
  t = setTimeout(timedCount, a);
  window.scrollBy(0, 1);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount(a);
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

function fontsize() {
  sw = sw + 1;        // incremente sw

  if (sw%2 == 0) {   // vede se sw è pari o dispari per switchare da piccolo/grande/piccolo 
    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.fontSize = "200%" ;
  }
  else
  {
    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.fontSize = "150%" ;
  }
  
}

function iniziale() {
  document.getElementById( 'output' ).style.color="white";
  document.getElementById( 'output' ).style.backgroundColor="black";
  document.getElementById('colorbackgroundtext').style.color=colori[4];
  document.getElementById('colorbackgroundtext').style.backgroundColor=colori[0];
  }

  function colortext() {
            // cambia il colore del testo
     matrix1 = matrix1 + 1
    
     if (matrix1 === 5){matrix1 = 0};
     //alert(colori[matrix1]);
  
    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.color = colori[matrix1] ;
    
    // fa cambiare il colore al bottone scelta colori e cambia anche lo sfondo del BOTTONE
    if (matrix1 === 0){document.getElementById('colortext').style.color=colori[4];}
    else{document.getElementById('colortext').style.color=colori[0]}; 
    document.getElementById('colortext').style.backgroundColor=colori[matrix1]; 
  
  }

  function colorbackgroundtext() {
    // cambia il colore del testo
matrix2 = matrix2 + 1

    if (matrix2 === 5){matrix2 = 0};
//alert(colori[matrix2]);

    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.backgroundColor = colori[matrix2] ;

// fa cambiare il colore al bottone scelta colori e cambia anche lo sfondo del BOTTONE
    if (matrix2 === 0){document.getElementById('colorbackgroundtext').style.color=colori[4];}
    else{document.getElementById('colorbackgroundtext').style.color=colori[0]}; 
  document.getElementById('colorbackgroundtext').style.backgroundColor=colori[matrix2]; 

}
function about() {
  alert("The Garage Music Tool 2.0 by Ivan");
}