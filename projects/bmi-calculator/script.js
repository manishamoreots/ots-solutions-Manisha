let BmiResults = [];

function calculate() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var result = (weight / (height * height)).toFixed(2);
  document.getElementById("calculated-result").innerHTML="BMI : " + result;
   BmiResults.push(" "+ result);
 
    
  document.getElementById("result").innerHTML = BmiResults;
  console.log(BmiResults);

  

  if (height <= 0 || weight <= 0) {
    alert("Please provide valid Number!!!");
    document.getElementById("result").innerHTML = "";
  }

  if(result<18.5){
    document.getElementById("current-status").innerHTML = "You are in Under Weight";
  }else if(result>18.5 || result <24.9){
    document.getElementById("current-status").innerHTML = "You are in Healthy  Weight";
    }else if(result>24.9){
      document.getElementById("current-status").innerHTML = "You are in Over  Weight";
  }
  if (BmiResults.length == 10) {
    BmiResults.shift();
  }
}
