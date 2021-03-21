import React, { useRef, useState } from "react";
import style from "./Description.module.scss";
import couch from "../../assets/descriptionSofa4.jpg";
import video from "../../assets/sofaVideo.mp4";
import couch1 from "../../assets/descSofa7.jpg";
import couch2 from "../../assets/descSofa6.jpg";

const Description = () => {
  const [isVideoPlayed, setisVideoPlayed] = useState(false);
  const vidRef = useRef(null);
  const playVideo = () => {
    vidRef.current.play();
    setisVideoPlayed(!isVideoPlayed);
  };
  const pauseVideo = () => {
    vidRef.current.pause();
    setisVideoPlayed(!isVideoPlayed);
  };

  return (
    <>
      <div className={style["desc-container"]} id="description">
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
        <div
          className={style["video-div"]}
          onClick={() => (isVideoPlayed ? pauseVideo() : playVideo())}
        >
          <video
            ref={vidRef}
            src={video}
            className={style["video"]}
            type="video/mp4"
          />
        </div>
        <div className={`${!isVideoPlayed ? style["opacity"] : ""}`}></div>
        <div
          className={`${style["play-button"]}`}
          id="play"
          onClick={() => {
            playVideo();
          }}
        >
          <i
            className={`fas fa-play ${
              style[!isVideoPlayed ? "play-circle" : "display-none"]
            }`}
          ></i>
        </div>
        <div className={style["desc-heading-div"]}>
          <h2 className={style["desc-heading"]}>
            At vero eos et accusamus et iusto odio dignissimos.
          </h2>
        </div>
      </div>

      <div div className={style["desc-container-3"]}>
        <div className={style["desc-3"]}>
          <div className={style["image-div"]}>
            <img src={couch1} alt="" />
          </div>
          <div className={style["image2-div"]}>
            <img src={couch2} alt="" />
          </div>
          <div className={style["download-div"]}>
            <a href="/#" className={style["download"]}>
              <i
                className={`far fa-arrow-alt-circle-down ${style["circle-down"]}`}
              ></i>
              <span className={style["download-pdf"]}>DOWNLOAD PDF</span>
            </a>
          </div>
          <span className={style["accomodation"]}>SUGGESTED ACCOMODATION</span>
        </div>
      </div>
    </>
  );
};
export default Description;
