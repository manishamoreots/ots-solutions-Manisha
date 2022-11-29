
let startbtn = document.getElementById("start-button");
let stopbtn = document.getElementById("stop-button");
let resetbtn = document.getElementById("reset-button");
stopbtn.disabled = true;

let min = 00;
let sec = 00;

startbtn.addEventListener("click", function () {
  timer = true;
  startTimer();
  document.getElementById("stop-button").disabled = false;
});

stopbtn.addEventListener("click", function () {
  timer = false;
});

resetbtn.addEventListener("click", function () {
  timer = false;
  min = 0;
  sec = 0;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
});

function startTimer() {
  if (timer) {
    sec++;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  let minutes = min;
  let seconds = sec;

  if (min < 10) {
    minutes = "0" + minutes;
  }

  if (sec < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  setTimeout(startTimer, 1000);
}
