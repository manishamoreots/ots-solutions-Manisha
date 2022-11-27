var min = 00;
var sec = 00;
var Timer;
document.getElementById("stop-button").disabled = true;

var startTimer = () => {
  sec++;
  document.getElementById("seconds").innerHTML = sec;
  if (sec >= 59) {
    min += 1;
    sec = 0;
    document.getElementById("minutes").innerHTML = min;
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
  min = 00;
  sec = 00;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
