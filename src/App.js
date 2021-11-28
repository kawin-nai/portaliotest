// import "./App.css";
import Productpage from "./Pages/Productpage";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/products" element={<Productpage />} />
      </Routes>
    </div>
  );
}

export default App;
