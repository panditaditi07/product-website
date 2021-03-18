import React from "react";
import style from "./Description.module.scss";
import couch from "../../assets/descriptionSofa4.jpg";
import video from "../../assets/sofaVideo.mp4";
const Description = () => {
  return (
    <>
      <div className={style["desc-container"]}>
        <div className={style["para-div"]}>
          <p className={style["para1"]}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>

          <p className={style["para2"]}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
        </div>

        <div className={style["desc-img-div"]}>
          <img src={couch} alt="" className={style["desc-img"]} />
        </div>
        <div className={style["desc-heading-div"]}>
          <h2 className={style["desc-heading"]}>
            At vero eos et accusamus et iusto odio dignissimos.
          </h2>
        </div>
      </div>

      <div className={style["desc-container-2"]}>
        <div className={style["video-div"]}>
          <video src={video} className={style["video"]} />
        </div>
        <div className={style["opacity"]}></div>
        <div className={style["play-button"]}>
          <i class={`fas fa-play ${style["play-circle"]}`}></i>
        </div>
        <div className={style["desc-heading-div"]}>
          <h2 className={style["desc-heading"]}>
            At vero eos et accusamus et iusto odio dignissimos.
          </h2>
        </div>
      </div>
    </>
  );
};
export default Description;
