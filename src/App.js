// import logo from "./logo.svg";
import "./App.css";
import Navigation from "../src/components/Header/Navigation";
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
