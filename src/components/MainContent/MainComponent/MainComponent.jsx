import React from "react";
import style from "./MainComponent.module.scss";
import SideSection from "../SideSection/SideSection";
import Details from "../Details/Details";
import Description from "../Description/Description";
import Reviews from "../Reviews/Reviews";
import Related from "../Related/Related";
const MainComponent = () => {
  return (
    <>
      <div className={style["breadcrum-div"]}>
        <ul className={style["breadcrum"]}>
          <li>
            <a href="/#">
              <i class={`gg-home ${style["home"]}`}></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className={`fas fa-caret-right ${style["caret"]}`}></i>
            </a>
          </li>
          <li>
            <a
              href="/#"
              className={`${style["list-name"]} ${style["grey-text"]}`}
            >
              CATLOG
            </a>
          </li>
          <li>
            <a href="/#">
              <i className={`fas fa-caret-right ${style["caret"]}`}></i>
            </a>
          </li>
          <li>
            <a
              href="/#"
              className={`${style["list-name"]} ${style["grey-text"]}`}
            >
              SOFAS
            </a>
          </li>
          <li>
            <a href="/#">
              <i className={`fas fa-caret-right ${style["caret"]}`}></i>
            </a>
          </li>
          <li>
            <a
              href="/#"
              className={`${style["list-name"]} ${style["black-text"]}`}
            >
              BEIGE NUDIE SOFA
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div className={style["main-container"]}>
        <div>
          <SideSection />
        </div>
        <div>
          <Details />
          <Description />
          <Reviews />
          <Related />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
// font-family: 'Montserrat', sans-serif;

/* <i class="fas fa-caret-right"></i>; */
