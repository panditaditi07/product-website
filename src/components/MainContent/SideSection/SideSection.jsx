import React from "react";
import style from "./SideSection.module.scss";
const SideSection = () => {
  return (
    <div>
      <div>Details</div>
      <ul className={style["side-content"]}>
        <li className={style["list-link"]}>
          <a href="/#" className={`${style["link"]}`}>
            DETAILS
          </a>
        </li>
        <li className={style["list-link"]}>
          <a href="/#" className={style["link"]}>
            DESCRIPTION
          </a>
        </li>
        <li className={style["list-link"]}>
          <a href="/#" className={style["link"]}>
            RELATED
          </a>
        </li>
        <li className={style["list-link"]}>
          <a href="/#" className={style["link"]}>
            REVIEWS
          </a>
        </li>
        <li className={`${style["list-link"]} ${style["style-icon"]}`}>
          <i className={`fab fa-facebook-f ${style["icons"]}`}></i>
          <i className={`fab fa-twitter ${style["icons"]}`}></i>
          <i className={`fab fa-pinterest ${style["icons"]}`}></i>
        </li>
      </ul>
      <div>Details</div>
    </div>
  );
};
export default SideSection;
