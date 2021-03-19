// import logo from "./logo.svg";
import style from "./App.module.scss";
import Navigation from "./components/Header/Navigation";
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className={style["App"]}>
      <Navigation />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
