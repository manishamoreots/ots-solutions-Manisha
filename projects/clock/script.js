setInterval(function clockFun() {
  var currrent_date = new Date();
  

  if (hours >= 12) {
    var hours = currrent_date.getHours();
    hours = hours - 12;
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

// function showTime() {
//   var currrent_date = new Date();
//   var hours = currrent_date.getHours();
//   var minutes = currrent_date.getMinutes();
//   var seconds = currrent_date.getSeconds();
//   var session = "AM";

//   if (hours == 0) {
//     hours = 12;
//   }
//   if (hours > 12) {
//     hours = hours - 12;
//     session = "PM";
//   }

//   hours = h < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   var time = hours + ":" + minutes + ":" + seconds + " " + session;

//   document.getElementById("clock").innerText = time;
//   document.getElementById("clock").textContent = time;

//   setTimeout(showTime, 1000);
// }
// showTime();
