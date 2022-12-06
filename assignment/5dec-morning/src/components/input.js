import List from "./list";
const InputList = () => {
  function Addme() {
    let Item = document.getElementById("inputField").value;

    var listItem = document.createElement("li");
    listItem.innerText = Item;

    var list = document.getElementById("List");
    list.appendChild(listItem);
  }
  return (
    <div
      style={{
        border: " 2px solid grey",
        height: 200,
        width: 400,
        margin: 100,
        padding: 50,
      }}
    >
      <input id="inputField" type="text" style={{height:30}}></input>
      <button style={{width:60, height:30,marginLeft:20}}onClick={() => Addme()}>Add</button>
      <List />
    </div>
  );
};

export default InputList
