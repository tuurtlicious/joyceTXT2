
function startTime() {

    function leadingZero(number){
        if(number < 10){
            return '0'+number; 
        } else {
            return number;
        }
    }

    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var day =  today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('clock').innerHTML =
    hour + ":" + minute + ":" + second;
    var t = setTimeout(startTime, 500);
    var date = day + "-" + month + "-" + year;
    document.getElementById("clock").innertext = date;
    document.getElementById("date").textContent = date;
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
startTime();