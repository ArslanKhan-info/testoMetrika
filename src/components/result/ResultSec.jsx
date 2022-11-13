import React, { useState } from "react";
import { connect, useStore } from "react-redux";
import style from "./ResultSec.module.scss";

const ResultSec = ({ count,time }) => {
  const [timing,setTiming]=useState(new Date(time*1000).toISOString().slice(11, 19))
  return (
    <div className={style.container}>
      <section className={style.wrp}>
        <div className={style.right}>
          <h2>Your result:</h2>
          <div className={style.details}>
            <p className={style.timing}>
              {" "}
              Test time: <span>{timing}</span> , average users 00:00:00.
            </p>
            <p className={style.description}>
              <b>Your IQ is {Math.floor((count/6)*100)}.</b> This corresponds to a below average level
              IQ. In this test you have {count} correct answers from {6}. This
              is not a very good result for your age 11.
            </p>
          </div>
          <p className={style.note}>
            Please note that the first four questions of the test were only the
            practice questions and they do not count towards the final result.
          </p>
        </div>
        <div className={style.left}></div>
      </section>
    </div>
  );
};
const getStatetoProps = ({ AnswerCount,Timing }) => ({ count: AnswerCount.count,time: Timing.time});
export default connect(getStatetoProps)(ResultSec);
