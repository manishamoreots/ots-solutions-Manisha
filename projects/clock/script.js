setInterval(function clockFun() {
  var currrent_date = new Date();
  var hours = currrent_date.getHours();

  if (hours >= 12) {
    // hours = hours - 12;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("status").innerHTML = "PM";
  } 
  else {
    document.getElementById("status").innerHTML = "AM";
  }

  var minutes = currrent_date.getMinutes();
  document.getElementById("minutes").innerHTML = minutes;

  var seconds = currrent_date.getSeconds();
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
