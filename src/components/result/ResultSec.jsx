import React, { useState } from "react";
import { connect, useStore } from "react-redux";
import { Link } from "react-router-dom";
import style from "./ResultSec.module.scss";
import {social} from '../../helpers/apiResponse'
import StarRatings from "react-star-ratings";

const ResultSec = ({ count, time }) => {
  const [timing, setTiming] = useState(
  new Date(time * 1000).toISOString().slice(11, 19))


  const handelcopy=(e)=>{
    navigator.clipboard.writeText('https://en.testometrika.com/intellectual/iq-test-for-kids-7-to-16-year-old/')
    e.target.innerHTML='Copied'
  }
 
  
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
              <b>Your IQ is {Math.floor((count / 6) * 100)}.</b> This
              corresponds to a below average level IQ. In this test you have{" "}
              {count} correct answers from {6}. This is not a very good result
              for your age 11.
            </p>
          </div>
          <p className={style.note}>
            Please note that the first four questions of the test were only the
            practice questions and they do not count towards the final result.
          </p>
          <h2>Permanent result link:</h2>
          <div className={style.result_link}>
            <Link className={style.link}>
              https://en.testometrika.com/intellectual/iq-test-for-kids-7-to-16-year-old/
            </Link>
            <button onClick={(e) => handelcopy(e) } className={style.btn}>Copy</button>
          </div>
          <footer>
          <h2>Share result:</h2>
          <ul className={style.social}>
            {social?.map((elm,i)=>(
              <li key={i} className={style[elm.name]}>
                <Link><img title={elm.name} className={style.link_img} src={elm?.img} alt=""/></Link>
                
              </li>
            ))}
          </ul>
          </footer>
        </div>

        <div className={style.left}>
        <StarRatings
          rating={3.5}
          numberOfStars={5}
          starDimension={'30px'}
          className={style.star}
          starSpacing={'2px'}
          starRatedColor={'#FFC257'}
          name='rating'
        />
        <p>3.5</p>
        </div>
      </section>
    </div>
  );
};
const getStatetoProps = ({ AnswerCount, Timing }) => ({
  count: AnswerCount.count,
  time: Timing.time,
});
export default connect(getStatetoProps)(ResultSec);
