var finalResult = document.getElementById("result");

function Myfun() {

  var red = document.getElementById("value-red").value;
  document.getElementById("red").innerHTML = red + ",";
 
  var green = document.getElementById("value-green").value;
  document.getElementById("green").innerHTML = green + ",";

  var blue = document.getElementById("value-blue").value;
  document.getElementById("blue").innerHTML = blue;

  finalResult.style.backgroundColor = `rgb(${red}+${green}+${blue})`;
}
