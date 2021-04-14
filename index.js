
var c = 0;
var t;
var timer_is_on = 0;
var a = 0;

var textSizeAaa = ["80%","100%","120%","140%","160%"];
var sw = 1;

var colori = ["black","darkblue", "orange", "yellow", "white"];
var matrix1 = 0;
var matrix2 = 0;
var abc = 0;
var cde = 0

function keyStartStop(ivanov) {
 // if you push enter you do a start/stop
  abc = abc + 1;
  if (abc === 2) {abc = 0};
  if(ivanov.keyCode == 13){
    if (abc === 1) {
      document.getElementById("buttonStart1").className = 'bottoneStop';
      startCount();}
    else{
      document.getElementById("buttonStart1").className = 'bottoneStart';
      stopCount()};
    };
  return false;// si può omettere... ma blocca la verifica continua dei tasti nel ciclo
}
function showRangeInLabel() {
  a = document.getElementById("myRange").value
  document.getElementById("labelMyRange").innerText = "- " + (("00" + a).slice(-3))+" +";
}

function timedCount(a = document.getElementById("myRange").value) {
 
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

function startstopCount() {
  abc = abc + 1;
  if (abc === 2) {abc = 0};
  
  
    if (abc === 1) {
      document.getElementById("buttonStart1").className = 'bottoneStop';
      startCount();} 
      else {
      document.getElementById("buttonStart1").className = 'bottoneStart'
      stopCount();};
    
}

function fontsize() {
  sw = sw + 1;        // incremente sw
  if (sw === 5){sw = 0};
  document.getElementById( 'output' ).style.fontSize  = textSizeAaa[sw] ;
}

function iniziale() {
  
  document.getElementById( 'output' ).style.color="white";
  document.getElementById( 'output' ).style.backgroundColor="black";
  document.getElementById('colorBgTextButton').style.color=colori[4];
  document.getElementById('colorBgTextButton').style.backgroundColor=colori[0];
  document.getElementById("labelMyRange").innerText = "- 125 +"
  
  }

  function colortext() {
            // cambia il colore del testo
     matrix1 = matrix1 + 1
    
     if (matrix1 === 5){matrix1 = 0};
     //alert(colori[matrix1]);
  
    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.color = colori[matrix1] ;
    
    // fa cambiare il colore al bottone scelta colori e cambia anche lo sfondo del BOTTONE
    if (matrix1 === 0){document.getElementById('colorTextButton').style.color=colori[4];}
    else{document.getElementById('colorTextButton').style.color=colori[0]}; 
    document.getElementById('colorTextButton').style.backgroundColor=colori[matrix1]; 
  
  }

  function colorbackgroundtext() {
    // cambia il colore del testo
matrix2 = matrix2 + 1

    if (matrix2 === 5){matrix2 = 0};
//alert(colori[matrix2]);

    demo_paragraph = document.getElementById( 'output' );
    demo_paragraph.style.backgroundColor = colori[matrix2] ;

// fa cambiare il colore al bottone scelta colori e cambia anche lo sfondo del BOTTONE
    if (matrix2 === 0){document.getElementById('colorBgTextButton').style.color=colori[4];}
    else{document.getElementById('colorBgTextButton').style.color=colori[0]}; 
  document.getElementById('colorBgTextButton').style.backgroundColor=colori[matrix2]; 

}
function topBottom(){
  cde = cde + 1
  if (cde === 2){cde = 0};
  if (cde == 1){
     window.scroll(0,0);}
    else {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);}
 
}

function about() {
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  alert("The Garage Music Tool 2.0 by Ivan");
  
 
}