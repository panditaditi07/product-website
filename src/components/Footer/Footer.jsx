import React from "react";
import style from "./Footer.module.scss";
import logo from "../assets/shopping-cart.png";
const Footer = () => {
  return (
    <div className={style["footer-div"]}>
      <div className={style["footer"]}>
        <div className={style["heading-div"]}>
          <p className={style["footer-heading"]}>Grab Our Newsletter</p>
          <br />
        </div>
        <div className={style["footer-section"]}>
          <div>
            <ul className={style["list-section"]}>
              <li className={`${style["link"]} ${style["link-bg"]}`}>
                BEDROOM
              </li>
              <li className={style["link"]}>LIVING ROOM</li>
              <li className={style["link"]}>OFFICE</li>
              <li className={style["link"]}>KITCHEN</li>
              <li className={style["link"]}>BATHROOM</li>
            </ul>
          </div>
          <div className={style["image-div"]}>
            <img src={logo} alt="logo" className={style["image"]} />
          </div>
          <div className={style["icons-section"]}>
            <i className={`fab fa-facebook-f ${style["icons"]}`}></i>
            <i className={`fab fa-twitter ${style["icons"]}`}></i>
            <i className={`fab fa-pinterest ${style["icons"]}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
