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

    function toTwelve(hour){
        if(hour > 12){
            return hour - 12
        }else if(hour === '00'){
            return 12
        }else{
            return hour
        }
    }

    var hours = time.getHours(),
        minutes = leadingZero(time.getMinutes()),
        seconds = leadingZero(time.getSeconds());

    if (hours >= 12){
        meridiem = " PM";
    }
    else {
        meridiem = " AM";
    }


    document.getElementsByClassName('clock')[0].innerHTML = toTwelve(hours) + ":" + minutes + ":" + seconds + meridiem;
    setColor("#" + leadingZero(hours) + minutes + seconds);

    document.getElementsByClassName('hexval')[0].innerHTML = "#" + leadingZero(hours) + minutes + seconds;

}
setInterval(clock, 1000);