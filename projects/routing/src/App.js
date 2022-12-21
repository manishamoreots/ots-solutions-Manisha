import { Routes,Route, Link } from "react-router-dom";
import "./App.css";
import ComponentA from "./component-A";
import ComponentB from "./component-B";
import ComponentC from "./component-C";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="\">{<div>HomePage</div>}</Link>
          </li>

          <li>
            <Link to="/component-a">{<ComponentA />}</Link>
          </li>

          <li>
            <Link to="/component-b">{<ComponentB />}</Link>
          </li>

          <li>
            <Link to="/component-c">{<ComponentC />}</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/component-a" element={<ComponentA />}/>
        <Route path="/component-b" element={<ComponentB />}/>
        <Route path="/component-c" element={<ComponentC />}/>
      </Routes>
    </div>
  );
}
export default App;
