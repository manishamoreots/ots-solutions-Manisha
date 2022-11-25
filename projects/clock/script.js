setInterval(function clockFun() {
  var currrent_date = new Date();
  var hours = currrent_date.getHours();
  document.getElementById("hours").innerHTML = hours;

  var minutes = currrent_date.getMinutes();
  document.getElementById("minutes").innerHTML = minutes;

  var seconds = currrent_date.getSeconds();
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("status").innerHTML = hours <= 12 ? "AM" : "PM";
}, 1000);
