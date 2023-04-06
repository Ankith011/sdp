

const startbtn = document.querySelector('#start');
const stopbtn = document.querySelector('#stop');
const resetbtn = document.querySelector('#reset');

let hrs=mins=sec=0;

startbtn.addEventListener('click' ,()=>{

    startTimer = setInterval(()=>{
        sec++;
        if(sec>60){
            mins++;
            sec=0;
            
        }
        if(mins==60){
            hrs++;
            mins=0;
        }

     updatedisplay();
    },1000);

});

stopbtn.addEventListener('click' ,()=>{
    clearInterval(startTimer);
    
    
});

resetbtn.addEventListener('click' ,()=>{
    hrs=mins=sec=0;
    updatedisplay();
   
    
});

function updatedisplay(){
    phrs=hrs<10?'0'+hrs : hrs;
    pmins=mins<10?'0'+mins:mins;
    psec=sec<10?'0'+sec:sec;

    document.querySelector('#hours-holder').innerText=phrs;
    document.querySelector('#minutes-holder').innerText=pmins;
    document.querySelector('#seconds-holder').innerText=psec;
}
    

