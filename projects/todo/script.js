var addbutton = document.getElementById("add-button");

var array = [];
addbutton.addEventListener("click", function () {
  var UserInput = document.getElementById("input-field").value;

  if (UserInput) {
    var listItem = document.createElement("li");
    listItem.innerText = UserInput;

    var list = document.getElementById("list");
    list.appendChild(listItem);

    var DeleteListItem = document.createElement("span");
    DeleteListItem.innerText = "X";
    listItem.appendChild(DeleteListItem);

    DeleteListItem.addEventListener("click", function () {
      listItem.innerText = "";
    });

    array.push(UserInput);
    console.log(array);
    var i;
    for (i = 0; i < array.length; i++) {}
    console.log(i);
    sessionStorage.setItem(i, UserInput);
  }
});

var clearbutton = document.getElementById("clear-button");
clearbutton.addEventListener("click", function () {
  list.innerText = "";
});

var persistbutton = document.getElementById("persist-button");
persistbutton.addEventListener("click", function () {
  for (i = 0; i <= sessionStorage.length; i++) {
    let data = sessionStorage.getItem(i);
  
    var listItemSessionData = document.createElement("li");
    list.appendChild(listItemSessionData);
    listItemSessionData.innerText = data;
    // console.log(data);
  }
});
