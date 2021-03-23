import React, { useState, forwardRef, useRef } from "react";
import sofa from "../../assets/detailsSofa1.jpeg";
import style from "./Details.module.scss";

const Details = (
  { incrementCount, decrementCount, count, setcartcount },
  ref
) => {
  const color = useRef(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const selectColor = (id) => {
    for (let c of color.current.children) {
      c.children[0].classList.remove("fa-check");
    }
    color.current.children[Number(id)].children[0].classList.add("fa-check");
  };
  return (
    <section className={style["details-section"]} id="details" ref={ref}>
      <div className={style["details-container"]}>
        <div className={style["sofa"]}>
          <img src={sofa} alt="sofa" />
        </div>
        <div className={style["details-content"]}>
          <h2>Nudie Extendable Sofa for 3 persons.</h2>

          <div className={style["stars"]}>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={ratingValue}>
                  <input
                    type="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <i
                    className={`fas fa-star ${
                      style[
                        ratingValue <= (hover || rating)
                          ? "checked-icon"
                          : "unchecked-icon"
                      ]
                    }`}
                    onMouseEnter={() => {
                      setHover(ratingValue);
                    }}
                    onMouseLeave={() => {
                      setHover(null);
                    }}
                  ></i>
                </label>
              );
            })}

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
            <div className={style["colors-div"]} ref={color}>
              <span
                id="0"
                className={style["brown"]}
                onClick={(event) => {
                  selectColor(event.target.id);
                }}
              >
                <i className={`fas ${style["check"]}`}></i>
              </span>
              <span
                id="1"
                className={style["black"]}
                onClick={(event) => {
                  selectColor(event.target.id);
                }}
              >
                <i className={`fas ${style["check"]}`}></i>
              </span>
              <span
                id="2"
                className={style["green"]}
                onClick={(event) => {
                  selectColor(event.target.id);
                }}
              >
                <i className={`fas fa-check ${style["check"]}`}></i>
              </span>
            </div>
          </div>

          <div className={style["addtocart-div"]}>
            <span className={style["dec"]} onClick={decrementCount}>
              —
            </span>
            <span className={style["counter"]}>{count}</span>
            <span className={style["inc"]} onClick={incrementCount}>
              +
            </span>
            <span
              className={style["addtocart"]}
              onClick={() => setcartcount((prevstate) => prevstate + count)}
            >
              ADD TO CART
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
// export default Details;
export default forwardRef(Details);
