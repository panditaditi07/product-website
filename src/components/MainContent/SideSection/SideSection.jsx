import React, { useState, useEffect } from "react";
import style from "./SideSection.module.scss";
const SideSection = ({
  detailsSection,
  descSection,
  reviewsSection,
  relatedSection,
}) => {
  console.log("Scroll pos", window.scrollY);
  // console.log("detail", detailsSection.current.id);
  // console.log("review", reviewsSection.current.id);
  // console.log("related", relatedSection.current);
  // console.log("description", descSection.current);
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
  // const listenScrollEvent = () => {
  //   console.log(detailsSection.current.id === "details");
  //   if (detailsSection.current.id === "details") {
  //     setsideTitle("Details");
  //     setisDetails(true);
  //     setisDesc(false);
  //     setisRelated(false);
  //     setisReviews(false);
  //   }
  //   if (descSection.current) {
  //     console.log(descSection.current.id === "description");
  //     setsideTitle("Description");
  //     setisDesc(true);
  //     setisDetails(false);
  //     setisRelated(false);
  //     setisReviews(false);
  //   }
  //   if (reviewsSection.current) {
  //     setsideTitle("Reviews");
  //     setisDesc(false);
  //     setisRelated(false);
  //     setisReviews(true);
  //     setisDetails(false);
  //   }
  //   if (relatedSection.current) {
  //     setsideTitle("Related");
  //     setisDesc(false);
  //     setisRelated(true);
  //     setisReviews(false);
  //     setisDetails(false);
  //   } else {
  //     setisDesc(false);
  //     setisRelated(false);
  //     setisReviews(false);
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    setisDetails(true);
    setsideTitle("Details");

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={style["side-section-div"]}>
      <ul className={style["side-content"]}>
        <li
          className={`${style["list-link"]} ${
            style[isDetails ? "hover-effect" : ""]
          }`}
        >
          <p
            className={`${style["link"]}`}
            onClick={() => {
              scrollTo(detailsSection.current);
            }}
          >
            DETAILS
          </p>
        </li>

        <li
          className={`${style["items-link"]} ${
            style[isDesc ? "hover-effect" : ""]
          }`}
        >
          <p
            className={style["link"]}
            onClick={() => {
              scrollTo(descSection.current);
            }}
          >
            DESCRIPTION
          </p>
        </li>
        <li
          className={`${style["items-link"]} ${
            style[isReviews ? "hover-effect" : ""]
          }`}
        >
          <p
            className={style["link"]}
            onClick={() => {
              scrollTo(reviewsSection.current);
            }}
          >
            REVIEWS
          </p>
        </li>
        <li
          className={`${style["items-link"]} ${
            style[isRelated ? "hover-effect" : ""]
          }`}
        >
          <p
            className={style["link"]}
            onClick={() => {
              scrollTo(relatedSection.current);
            }}
          >
            RELATED
          </p>
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
// export default forwardRef(SideSection);
