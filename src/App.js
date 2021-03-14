// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
