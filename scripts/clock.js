function setColor(color){
    document.getElementById("backdrop").style.backgroundColor = color;
}

function clock(){
    var time = new Date();

    function leadingZero(standIn){
        if (standIn < 10){
            standIn = '0' + standIn
        }

        return standIn;
    }

    var hours = leadingZero(time.getHours()),
        minutes = leadingZero(time.getMinutes()),
        seconds = leadingZero(time.getSeconds());

    document.querySelectorAll('.clock')[0].innerHTML = hours + ":" + minutes + ":" + seconds;
    setColor("#" + hours + minutes + seconds);

}
setInterval(clock, 1000);