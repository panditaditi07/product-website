import React, { useState, useEffect } from "react";
import style from "./SideSection.module.scss";
const SideSection = () => {
  console.log("Scroll pos", window.scrollY);

  const [isDetails, setisDetails] = useState(false);
  const [isDesc, setisDesc] = useState(false);
  const [isRelated, setisRelated] = useState(false);
  const [isReviews, setisReviews] = useState(false);
  const [sideTitle, setsideTitle] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY >= 0 && window.scrollY <= 749) {
      setsideTitle("Details");
      setisDetails(true);
      setisDesc(false);
      setisRelated(false);
      setisReviews(false);
    } else if (window.scrollY >= 750 && window.scrollY <= 2699) {
      setsideTitle("Description");
      setisDesc(true);
      setisDetails(false);
      setisRelated(false);
      setisReviews(false);
    } else if (window.scrollY >= 2800 && window.scrollY <= 3599) {
      setsideTitle("Reviews");
      setisDesc(false);
      setisRelated(false);
      setisReviews(true);
      setisDetails(false);
    } else if (window.scrollY >= 3500) {
      setsideTitle("Related");
      setisDesc(false);
      setisRelated(true);
      setisReviews(false);
      setisDetails(false);
    } else {
      setisDesc(false);
      setisRelated(false);
      setisReviews(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    setisDetails(true);
    setsideTitle("Details");

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={style["side-section-div"]}>
      <ul className={style["side-content"]}>
        <li
          className={`${style["list-link"]} ${
            style[isDetails ? "hover-effect" : ""]
          }`}
        >
          <a href="/#details" className={`${style["link"]}`}>
            DETAILS
          </a>
        </li>
        {/* <li className={style["items-link"]}>
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
        </li> */}
        <li
          className={`${style["items-link"]} ${
            style[isDesc ? "hover-effect" : ""]
          }`}
        >
          <a href="/#description" className={style["link"]}>
            DESCRIPTION
          </a>
        </li>
        <li
          className={`${style["items-link"]} ${
            style[isReviews ? "hover-effect" : ""]
          }`}
        >
          <a href="/#related" className={style["link"]}>
            REVIEWS
          </a>
        </li>
        <li
          className={`${style["items-link"]} ${
            style[isRelated ? "hover-effect" : ""]
          }`}
        >
          <a href="/#reviews" className={style["link"]}>
            RELATED
          </a>
        </li>

        <li className={`${style["items-link"]} ${style["style-icon"]}`}>
          <i className={`fab fa-facebook-f ${style["icons"]}`}></i>
          <i className={`fab fa-twitter ${style["icons"]}`}></i>
          <i className={`fab fa-pinterest ${style["icons"]}`}></i>
        </li>
      </ul>
      <div className={style["option"]}>
        <h3>{sideTitle}</h3>
      </div>
    </div>
  );
};
export default SideSection;
