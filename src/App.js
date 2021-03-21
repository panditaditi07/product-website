// import logo from "./logo.svg";
import React, { useState } from "react";
import style from "./App.module.scss";
import Navigation from "./components/Header/Navigation";
import MainComponent from "./components/MainContent/MainComponent/MainComponent";
import Footer from "./components/Footer/Footer";
function App() {
  const [count, setcount] = useState(1);
  const [cartcount, setcartcount] = useState(0);

  const incrementCount = () => {
    setcount(count + 1);
  };
  const decrementCount = () => {
    setcount(count - 1);
  };

  return (
    <div className={style["App"]}>
      <Navigation count={cartcount} />
      <MainComponent
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        setcartcount={setcartcount}
        count={count}
      />
      <Footer />
    </div>
  );
}

export default App;
