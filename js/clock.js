var c = document.querySelector(".clock");
var d = document.querySelector(".date");
setInterval(() => {
    var today = new Date();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    var date = today.toDateString();
    c.innerText = "${padding(hh)}:${padding(mm)}:${padding(ss)}";
    d.innerText = date;
});

function padding(n) {
    return n.toString().padStart(2, "0");
}

function showTime(){
    var Date = new Date();
    var hh = date.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    var session = "AM";

    if(hh == 0){
        hh = 12;
    }

    if(hh > 12){
        hh= hh-12;
        session= "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    var time = hh + ":" + mm + ":" + s + " " + session;
    document.getElementById(".clock").innerText = time;
    document.getElementById(".clock").textContent = time;

    setTimeout(showTime,1000);
}

showTime();