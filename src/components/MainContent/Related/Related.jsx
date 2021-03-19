import React from "react";
import style from "./Related.module.scss";
import yellowlamp from "../../assets/yellowlamp.jpeg";
import purplechair from "../../assets/purplechair1.jpg";
import blackpendant from "../../assets/blackpendant2.jpeg";
import drawer from "../../assets/drawer.jpg";
import whitependant from "../../assets/whitependant.jpeg";
import heartchair from "../../assets/heartchair.jpg";
import brownchair from "../../assets/brownchair.jpg";
import bluechair from "../../assets/bluechair.jpg";
const Related = () => {
  return (
    <div className={style["related-div"]}>
      <div className={style["title-div"]}>
        <h2 className={style["title"]}>Related products</h2>
      </div>
      <div className={style["showpiece-div"]}>
        <div className={style["image-div"]}>
          <img src={yellowlamp} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={purplechair} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={blackpendant} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={drawer} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={whitependant} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={heartchair} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={brownchair} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
        <div className={style["image-div"]}>
          <img src={bluechair} alt="" className={style["images"]} />
          <p className={style["heading"]}>Bamboo fiber gobo</p>
          <span className={style["strikethrough"]}>$169</span>
          <span className={style["bold-txt"]}>$149</span>
        </div>
      </div>
    </div>
  );
};
export default Related;
