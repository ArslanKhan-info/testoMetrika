import React from "react";
import style from "./TopSecHome.module.scss";
import homepic from "../../asset/img/homepic.svg";
import { Link } from "react-router-dom";

const TopSecHome = () => {
  return (
    <div className={style.TopSecHome}>
      <img className={style.img} src={homepic} alt="" />
      <h1 className={style.heading}>IQ Test for kids from 7 to 16 year old</h1>
      <Link to="/iq-test-for-kids-7-to-16-year-old">
        <div className={style.btn}>
          Start test<span></span>
        </div>
      </Link>
    </div>
  );
};

export default TopSecHome;
