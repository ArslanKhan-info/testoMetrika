import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ArticleHome from '../../components/articleHome/ArticleHome'
import TopSecHome from '../../components/topSecHome/TopSecHome'
import { resetAnswerCount, resetTime } from '../../Redux/action'
import style from './homepage.module.scss'

const Homepage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(resetAnswerCount())
    dispatch(resetTime())
  },[])
  return (
    <section className={style.Homepage}>
      <div className={style.wrp}>
        <TopSecHome/>
        <ArticleHome/>
      </div>
    </section>
  )
}

export default Homepage