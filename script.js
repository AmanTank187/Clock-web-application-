
  function clock() {
    var fullDate = new Date();
    var years = fullDate.getFullYear();
    var months = fullDate.getMonth() + 1;
    var dates = fullDate.getDate();



    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var secs = fullDate.getSeconds();

    if (hours < 10){
      hours = "0" + hours;
    }

    if (mins < 10){
      mins = "0" + mins;
    }

    if (secs < 10){
      secs = "0" + secs;
    }

    if (dates < 10){
      dates = "0" + dates;
    }

    if (months < 10){
      months = "0" + months;
    }


    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + mins;
    document.getElementById('second').innerHTML = ": " + secs;

    document.getElementById('date').innerHTML = dates;

    document.getElementById('month').innerHTML ="/ " + months;

    document.getElementById('year').innerHTML ="/ " + years;

}






 setInterval(clock,100);
