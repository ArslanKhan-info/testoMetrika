import React from 'react'
import { Link } from 'react-router-dom'
import style from './CollapsMenu.module.scss'

const CollapsMenu = ({menuList}) => {
  return (
    <ul className={style.CollapsMenu}>
        {menuList.map((elm,i)=>(
            <li key={i}>
                <Link className={style.CollapsMenu_item}>{elm}</Link>
            </li>
        ))}
    </ul>
  )
}

export default CollapsMenu