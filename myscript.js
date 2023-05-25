const totalTimeInSecond = 10000;

//*const totalTimeMinutes = 60;

//*const totalTimeHours = 60

//*const totalTimeDay = 60

let secondToShow = 10;

const countDown = setInterval(function(){
    secondToShow--;
    console.log(secondToShow);
    clearInterval(countDown);

    alert('Inizia la lezione!!');
}, 10000);



//? tempo totale (20 * 60 * 60 * 1000) 


/**setTimeout(function (){
    alert('Inizia la lezione!!');
    clearInterval(countDown);
}, totalTimeInSecond); */