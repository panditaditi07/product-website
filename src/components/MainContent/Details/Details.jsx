import React from "react";
import sofa from "../../assets/detailsSofa1.jpeg";
import style from "./Details.module.scss";

const Details = () => {
  return (
    <div className={style["details-section"]} id="details">
      <div className={style["details-container"]}>
        <div className={style["sofa"]}>
          <img src={sofa} alt="sofa" />
        </div>
        <div className={style["details-content"]}>
          <h2>Nudie Extendable Sofa for 3 persons.</h2>

          <div className={style["stars"]}>
            <span>
              <i className={`fas fa-star ${style["checked-icon"]}`}></i>
            </span>
            <span>
              <i className={`fas fa-star ${style["checked-icon"]}`}></i>
            </span>
            <span>
              <i className={`fas fa-star ${style["checked-icon"]}`}></i>
            </span>
            <span>
              <i className={`fas fa-star ${style["unchecked-icon"]}`}></i>
            </span>
            <span>
              <i className={`fas fa-star ${style["unchecked-icon"]}`}></i>
            </span>
            <span className={style["star-likes"]}>(23)</span>
          </div>

          <div className={style["prices"]}>
            <span className={style["price-1"]}>$169</span>
            <span className={style["price-2"]}>$149</span>
          </div>

          <div className={style["assembly-div"]}>
            <ul className={style["list-style"]}>
              <li className={style["list-assembly"]}>
                ASSEMBLY:
                <span className={style["carpentary"]}>Carpenter Assembly</span>
              </li>
              <li className={style["warranty-assembly"]}>
                WARRANTY:
                <span className={style["months"]}>12 Months Warranty</span>
              </li>
            </ul>
          </div>

          <div className={style["rp-div"]}>
            <span>
              <i className={`fas fa-car ${style["car"]}`}></i>
            </span>

            <div className={style["dispatch"]}>SAME DAY DISPATCH</div>
            <span>
              <i className={`fas fa-sync-alt ${style["undo"]}`}></i>
            </span>

            <div className={style["rp"]}>EASY-30 DAY RETURN POLICY</div>
          </div>

          <div className={style["select-color"]}>
            <p className={style["color"]}>COLOR:</p>
            <div className={style["colors-div"]}>
              <span className={style["brown"]}></span>
              <span className={style["black"]}></span>
              <span className={style["green"]}>
                <i class={`fas fa-check ${style["check"]}`}></i>
              </span>
            </div>
          </div>

          <div className={style["addtocart-div"]}>
            <span className={style["dec"]}>—</span>
            <span className={style["counter"]}>1</span>
            <span className={style["inc"]}>+</span>
            <span className={style["addtocart"]}>ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
