import React from "react";
import sofa from "../../assets/detailsSofa1.jpeg";
import style from "./Details.module.scss";
const Details = () => {
  return (
    <div className={style["details-section"]}>
      <div className={style["details"]}>
        <div className={style["sofa"]}>
          <img src={sofa} alt="sofa" />
        </div>
        <div className={style["details-content"]}>
          <h2>Nudie Extendable Sofa for 3 persons.</h2>
        </div>
      </div>
    </div>
  );
};
export default Details;
