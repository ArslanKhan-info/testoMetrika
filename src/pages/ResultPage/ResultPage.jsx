import React from 'react'
import style from './ResultPage.module.scss'
import Topsec from '../../components/result/Topsec'
import ResultSec from '../../components/result/ResultSec'

const ResultPage = () => {
  return (
    <div className={style.ResultPage}>
      <Topsec/>
      <ResultSec/>
    </div>
  )
}

export default ResultPage