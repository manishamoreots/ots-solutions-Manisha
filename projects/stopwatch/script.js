var min = 0;
var sec = 0;
var Timer;
document.getElementById("stop-button").disabled = true;

var startTimer = () => {
  sec++;
  document.getElementById("seconds").innerHTML = sec;

  if (sec >= 59) {
    min = min + 1;
    document.getElementById("minutes").innerHTML = min;
    sec = 0;
  }
  
};

function start() {
  Timer = setInterval(startTimer, 1000);
  document.getElementById("stop-button").disabled = false;
}

function stop() {
  clearInterval(Timer);
}

function reset() {
  clearInterval(Timer);
  min = 0;
  sec = 0;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
