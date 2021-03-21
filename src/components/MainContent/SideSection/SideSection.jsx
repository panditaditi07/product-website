import React, { useRef, useState } from "react";
import style from "./SideSection.module.scss";
const SideSection = () => {
  return (
    <div className={style["side-section-div"]}>
      <ul className={style["side-content"]}>
        <li className={style["list-link"]}>
          <a href="/#details" className={`${style["link"]}`}>
            DETAILS
          </a>
        </li>
        <li className={style["items-link"]}>
          <a href="/#description" className={style["link"]}>
            DESCRIPTION
          </a>
        </li>
        <li className={style["items-link"]}>
          <a href="/#related" className={style["link"]}>
            RELATED
          </a>
        </li>
        <li className={style["items-link"]}>
          <a href="/#reviews" className={style["link"]}>
            REVIEWS
          </a>
        </li>

        <li className={`${style["items-link"]} ${style["style-icon"]}`}>
          <i className={`fab fa-facebook-f ${style["icons"]}`}></i>
          <i className={`fab fa-twitter ${style["icons"]}`}></i>
          <i className={`fab fa-pinterest ${style["icons"]}`}></i>
        </li>
      </ul>
      <div className={style["option"]}>
        <h3>Details</h3>
      </div>
    </div>
  );
};
export default SideSection;
