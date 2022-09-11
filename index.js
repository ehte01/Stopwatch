let seconds= 00;
let tens= 00;
const secondElement= document.getElementById("seconds");
const tensElement= document.getElementById("tens"); 
const buttonStart= document.getElementById("btn-start");
const buttonStop= document.getElementById("btn-stop");
const buttonReset= document.getElementById("btn-reset");
var Interval;

/* when start button is pressed*/
buttonStart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval= setInterval(startTime,10);
    document.getElementById("box").style.height="20px";
    document.getElementById("box").style.backgroundColor="red";
});

/* when stop button is pressed*/
buttonStop.addEventListener('click',()=>{
    clearInterval(Interval);
    document.getElementById("box").style.height="50px";
    document.getElementById("box").style.backgroundColor="lightsalmon";
});

/* when reset button is pressed*/

buttonReset.addEventListener('click',()=>{
    clearInterval(Interval);
    tens="00";
    seconds="00";
    secondElement.innerHTML=tens;
    tensElement.innerHTML=seconds;
});

function startTime(){
    tens++;
    if(tens<=9){
        tensElement.innerHTML= "0" + tens;
    }
    if(tens>9){
        tensElement.innerHTML=tens;
    }

    if(tens>99){
        seconds++;
        secondElement.innerHTML="0"+seconds;
        tens=0;
        tensElement.innerHTML="0"+tens
    }
    if(seconds>9){
        secondElement.innerHTML= seconds;
    }
}