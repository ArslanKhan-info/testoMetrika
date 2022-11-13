import React, { useEffect, useState } from "react";
import { questions } from "../../helpers/apiResponse";
import style from "./TestPage.module.scss";
import close from "../../asset/img/close.svg";
import { useDispatch } from "react-redux";
import { answerCount } from "../../Redux/action";
import { Link } from "react-router-dom";

const TestPage = () => {
  const dispatch = useDispatch()
  const [index, setindex] = useState(0);
  const [currentQus, setcurrentQus] = useState({});

  useEffect(() => {
    setcurrentQus(questions[index]);
  }, [index]);

  const handelResponse = (ans) => {
    if (index + 1 == questions.length) {
      return false;
    }
    setindex(index + 1);
    if(ans == 1 ){
      dispatch(answerCount())
    }
  };


  return (
    <>
      <div className={style.wrp}>
        <nav>
          <p className={style.qes_count}>
            <span>{index + 1}</span>/{questions.length}
          </p>
          <Link to='/'><img className={style.close_icon} src={close} alt="" /></Link>
        </nav>

        <section className={style.question_sec}>
          <img
            className={style.question_img}
            src={currentQus.question_img}
            alt=""
          />
          <h4 className={style.question}>{currentQus.text}</h4>
        </section>
        <ul className={style.options}>
          {currentQus?.options?.map((elm, i) => (
            <li key={i} className={style.option}>
              <img
                onClick={() => handelResponse(elm.answer)}
                className={style.option_img}
                src={elm.op}
                alt=""
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.progress_bar}>
        <span style={{ width: `${(index +1/ questions.length) * 100}%` }}></span>
      </div>
    </>
  );
};

export default TestPage;
