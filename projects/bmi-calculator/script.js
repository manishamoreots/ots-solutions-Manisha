let BmiResults = [];

function calculate() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var result = (weight / (height * height)).toFixed(2);
    
  document.getElementById("result").innerHTML = BmiResults;
  console.log(BmiResults);

  document.getElementById("calculated-result").innerHTML=result;
   BmiResults.push(result);
 

  if (height <= 0 || weight <= 0) {
    alert("Please provide valid Number!!!");
    document.getElementById("result").innerHTML = "";
  }

  if(result<18.5){
    alert("You are Under Weight");
  }else if(result>18.5 || result <24.9){
    alert("You are Healthy Weight");
  }else if(result>24.9){
    alert("You are Over weight")
  }
  if (BmiResults.length == 10) {
    BmiResults.shift();
  }
}
