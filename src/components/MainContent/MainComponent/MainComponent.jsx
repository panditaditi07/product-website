import React, { useRef } from "react";
import style from "./MainComponent.module.scss";
// import HorizontalSection from "../HorizontalSection/HorizontalSection";
import SideSection from "../SideSection/SideSection";
import Details from "../Details/Details";
import Description from "../Description/Description";
import Reviews from "../Reviews/Reviews";
import Related from "../Related/Related";
const MainComponent = ({
  incrementCount,
  decrementCount,
  count,
  setcartcount,
}) => {
  const details = useRef();
  const description = useRef();
  const reviews = useRef();
  const related = useRef();

  const refobj = {
    Details: details,
    Description: description,
    Reviews: reviews,
    Related: related,
  };
  return (
    <>
      <div className={style["main-container"]}>
        <div className={style["breadcrum-container"]}>
          <div className={style["breadcrum-div"]}>
            <ul className={style["breadcrum"]}>
              <li>
                <a href="/#">
                  <i className={`fas fa-home ${style["home"]}`}></i>
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
        </div>
        <br />
        <div className={style["content-container"]}>
          <div className={style["side-section"]}>
            <SideSection refobj={refobj} />
          </div>

          <div className={style["content-div"]}>
            <div className={style["details-section"]}>
              <Details
                ref={details}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                count={count}
                setcartcount={setcartcount}
              />
            </div>
            <div>
              <Description ref={description} />
            </div>
            <div>
              <Reviews ref={reviews} />
            </div>
            <div>
              <Related ref={related} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
