import React from "react";
import style from "./Navigation.module.scss";
import logo from "../assets/shopping-cart.png";
const Navigation = ({ count }) => {
  return (
    <div className={style["header"]}>
      <ul className={style["navigation"]}>
        <div className={style["logo"]}>
          <img src={logo} width="70px" height="70px" alt="logo" />
        </div>
        <div className={style["list"]}>
          <li>
            <a href="/#" className={`${style["link"]} ${style["link-bg"]}`}>
              BEDROOM
            </a>
          </li>
          <li>
            <a href="/#" className={style["link"]}>
              LIVING ROOM
            </a>
          </li>
          <li>
            <a href="/#" className={style["link"]}>
              OFFICE
            </a>
          </li>
          <li>
            <a href="/#" className={style["link"]}>
              KITCHEN
            </a>
          </li>
          <li>
            <a href="/#" className={style["link"]}>
              BATHROOM
            </a>
          </li>
          <li>
            <a href="/#">
              <i className={`fas fa-search ${style["icon-link"]}`}></i>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className={`far fa-heart ${style["icon-link"]}`}></i>
            </a>
          </li>
          <li className={style["bag-link"]}>
            <div className={style["cart-count"]}>
              <span>{count}</span>
            </div>
            <i
              className={`gg-shopping-bag ${style["icon-link"]} ${style["bag"]}`}
            ></i>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Navigation;
