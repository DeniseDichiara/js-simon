const expiryDate = new Date("May 26, 2023 09:30:00").getTime();

const countDown = setInterval(function(){
    const actualDate = new Date().getTime();

    const remainingTime = expiryDate - actualDate ;
    
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((remainingTime % (1000 * 60)) / (1000));


    document.getElementById('time-to-count-h').innerHTML = hours;
    document.getElementById('time-to-count-m').innerHTML = minutes;
    document.getElementById('time-to-count-s').innerHTML = seconds;

    document.getElementById('time-to-h-m-s').innerHTML = 'Hours ' + 'Minutes ' + 'Seconds';


    if(remainingTime < 0){
        clearInterval(countDown);
        document.getElementById('time-to-count').innerHTML = 'YOUR CLASS STARTS NOW!!'
    }

}, 1000);
