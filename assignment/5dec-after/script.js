const root = ReactDOM.createRoot(document.getElementById("root"));

const age = prompt("Enter Your age: ");
Adult = React.createElement("h3", null, "You are an Adult");
let notadult = React.createElement(
  "h3",
  null,
  "You are not Adult! You will be adult after 3/4 years."
);

root.render(age >= 18 ? Adult : notadult);
