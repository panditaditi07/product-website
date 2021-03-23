import React, { forwardRef } from "react";
import style from "./Reviews.module.scss";
import talib from "../../assets/talib.jpeg";
import aditi from "../../assets/aditi.jpeg";
const Reviews = (props, ref) => {
  return (
    <>
      <section className={style["reviews-div"]} id="reviews" ref={ref}>
        <h2>23 Reviews for Nudie extendable Sofa</h2>
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
          <span className={style["star-likes"]}>3.61</span>
          <span className={style["star-likes"]}>(23 reviews)</span>
        </div>

        <div className={style["feedback-div"]}>
          <div className={style["comments-div"]}>
            <div className={style["image-name-div"]}>
              <div>
                <img src={talib} alt="" className={style["profile-image"]} />
              </div>
              <div className={style["name-div"]}>
                <p className={style["bold-text"]}>Talib Chowdhary</p>
                <p className={style["gray-text"]}>March 18th 2021</p>
              </div>
            </div>
            <div className={style["review-container"]}>
              <p className={style["bold-text"]}>Good</p>
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
              </div>
              <p className={style["comments"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis expedita ullam rerum beatae voluptatem laborum
                similique quaerat possimus dolore porro fugiat quia, praesentium
                ducimus deleniti mollitia quo dolores vel exercitationem at,
                quibusdam quis quidem? Dignissimos ab fugiat quasi ullam.
                Dolorem recusandae assumenda dolor, mollitia provident eius
                ipsa! Nulla sapiente repellat voluptate laudantium similique sit
                voluptatem pariatur cum id modi soluta in aut, voluptatibus at
                optio quisquam incidunt dolore perferendis autem!
              </p>
              <p className={style["bold-text"]}>Add Comment</p>
            </div>
          </div>
          <div className={style["comments-div"]}>
            <div className={style["image-name-div"]}>
              <div>
                <img src={aditi} alt="" className={style["profile-image"]} />
              </div>
              <div className={style["name-div"]}>
                <p className={style["bold-text"]}>Aditi Pandit</p>
                <p className={style["gray-text"]}>March 19th 2021</p>
              </div>
            </div>
            <div className={style["review-container"]}>
              <p className={style["bold-text"]}>Good</p>
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
              </div>
              <p className={style["comments"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam magnam illum consectetur alias dolorem nesciunt
                deleniti ut deserunt nobis repellendus? Consequuntur repellendus
                maxime reiciendis repudiandae similique sit necessitatibus
                asperiores dolorem.
              </p>
              <p className={style["bold-text"]}>Add Comment</p>
            </div>
          </div>
          <p className={style["load"]}>Load more(21)</p>
        </div>
      </section>
    </>
  );
};

export default forwardRef(Reviews);
