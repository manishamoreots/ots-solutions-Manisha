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

    //  sessionStorage.setItem(i, UserInput);
    localStorage.setItem("task", JSON.stringify(array));
  }
});

var clearbutton = document.getElementById("clear-button");
clearbutton.addEventListener("click", function () {
  list.innerText = "";
});

var persistbutton = document.getElementById("persist-button");
persistbutton.addEventListener("click", function () {
  let data = JSON.parse(localStorage.getItem("task"));
  // console.log(data);
  array = [...data];
  for (let i = 0; i < data.length; i++) {
    // let ul = document.querySelector("ul");
    // let li = document.createElement("li");
    // li.innerText = data[i];
    // ul.appendChild(li);
    var listItemSessionData = document.createElement("li");
    listItemSessionData.innerText = data[i];
    list.appendChild(listItemSessionData);
  }
});
