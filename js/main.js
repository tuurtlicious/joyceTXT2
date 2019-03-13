
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
    
    //var day =  today.getDate();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var formatDate = today.getDate() + '-' + months[today.getMonth()] + '-' + today.getFullYear();
    document.getElementById("date").innerHTML = formatDate;


    //var year = today.getFullYear();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('clock').innerHTML =
    hour + ":" + minute + ":" + second;
    var t = setTimeout(startTime, 500);
    document.getElementById("clock").innertext = date;
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
startTime();