import React from "react";
import style from "./Topsec.module.scss";
import backArrow from "../../asset/img/backarrow.svg";
import { Link } from "react-router-dom";
import Repeat from '../../asset/img/repeat.svg'

const Topsec = () => {
  return (
    <section className={style.Topsec}>
      <div className={style.backBtn}>
        <img src={backArrow} alt="" /> to test
      </div>
      <div className={style.title}>
        <div className={style.link}>
          <Link>
            <p>Test</p>
          </Link>{" "}
          <p className={style.dot}>.</p>{" "}
          <Link>
            <p>Intellectual</p>{" "}
          </Link>
        </div>
        <h1 className={style.heading}>
          IQ Test for kids from 7 to 16 year old
        </h1>
        <Link to="/iq-test-for-kids-7-to-16-year-old">
          <div className={style.btn}>
            <img src={Repeat} alt="" /> Take the test again<span></span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Topsec;
