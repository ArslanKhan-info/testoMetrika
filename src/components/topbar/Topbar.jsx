import React, { useState } from 'react'
import style from './Topbar.module.scss'
import logo from '../../asset/img/logo.svg'
import Search from '../../asset/img/search.svg'
import profilePic from '../../asset/img/profilePic.svg'
import { Link } from 'react-router-dom'

const Topbar = ({showSidebar,setShowSidebar}) => {
  

  return (
    <>
     <div className={style.menu_icon_wrp}>
            <div className={!showSidebar ? style.menu_icon : `${style.show} ${style.menu_icon}`} onClick={()=>setShowSidebar(!showSidebar)}>
              <span className={style.bar1}></span>
              <span className={style.bar2}></span>
              <span className={style.bar2_1}></span>
              <span className={style.bar3}></span>
            </div>
          </div>
      <nav className={style.topbar}>
        <div className={style.menu_logo}>
         
          <Link to='/' className={style.cont}><img src={logo} alt="" className={style.logo}/></Link>
        </div>
        <div className={style.search_profile}>
          <div className={style.search}>
            <input type='text' placeholder='Search among 335 tests...'></input>
            <img src={Search} alt="" />
          </div>
          <div className={style.profile_pic}>
            <img src={profilePic} alt="" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topbar