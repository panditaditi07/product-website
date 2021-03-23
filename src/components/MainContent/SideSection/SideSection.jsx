import React, { useEffect, useRef } from "react";
import style from "./SideSection.module.scss";
const SideSection = (props) => {
  const { refobj } = props;

  const links = useRef(null);
  const sidename = useRef(null);

  // const listenScrollEvent = () => {
  //   let scrollpos = window.scrollY;
  //   for (let i = Object.entries(refobj).length - 1; i >= 0; i--) {
  //     if (Object.entries(refobj)[i][1].current.offsetTop < scrollpos) {
  //       for (let link of links.current.children) {
  //         console.log("link-removed", link.classList);
  //         link.classList.remove(`${style["hover-effect"]}`);
  //       }
  //       links.current.children[i].classList.add(`${style["hover-effect"]}`);
  //       sidename.current.innerText = Object.entries(refobj)[i][0];
  //       break;
  //     }
  //   }
  // };
  const listenScrollEvent = () => {
    let scrollpos = window.scrollY;
    for (let i = 0; i <= Object.entries(refobj).length - 1; i++) {
      let position =
        Object.entries(refobj)[i][1].current.offsetHeight +
        Object.entries(refobj)[i][1].current.offsetTop;

      if (position > scrollpos) {
        for (let link of links.current.children) {
          link.classList.remove(`${style["hover-effect"]}`);
        }
        links.current.children[i].classList.add(`${style["hover-effect"]}`);
        sidename.current.innerText = Object.entries(refobj)[i][0];
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const scrollTo = (ele) => {
    ele.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={style["side-section-div"]}>
      <ul className={style["side-content"]} ref={links}>
        <li className={`${style["list-link"]} ${style["hover-effect"]}`}>
          <p
            className={`${style["link"]}`}
            onClick={() => {
              scrollTo(refobj.Details.current);
            }}
          >
            DETAILS
          </p>
        </li>

        <li className={`${style["items-link"]}  `}>
          <p
            className={style["link"]}
            id="1"
            onClick={() => {
              scrollTo(refobj.Description.current);
            }}
          >
            DESCRIPTION
          </p>
        </li>
        <li className={`${style["items-link"]} `}>
          <p
            className={style["link"]}
            onClick={() => {
              scrollTo(refobj.Reviews.current);
            }}
          >
            REVIEWS
          </p>
        </li>
        <li className={`${style["items-link"]} `}>
          <p
            className={style["link"]}
            onClick={() => {
              scrollTo(refobj.Related.current);
            }}
          >
            RELATED
          </p>
        </li>

        <li className={`${style["icons-link"]} ${style["style-icon"]}`}>
          <a href="/#" className={style["icon-link"]}>
            <i className={`fab fa-facebook-f ${style["icons"]}`}></i>
          </a>
          <a href="/#" className={style["icon-link"]}>
            <i className={`fab fa-twitter ${style["icons"]}`}></i>
          </a>
          <a href="/#" className={style["icon-link"]}>
            <i className={`fab fa-pinterest ${style["icons"]}`}></i>
          </a>
        </li>
      </ul>
      <div className={style["option"]}>
        <h3 ref={sidename}>Details</h3>
      </div>
    </div>
  );
};
export default SideSection;
