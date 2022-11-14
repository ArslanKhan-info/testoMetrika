import React, { useState } from "react";
import style from "./Sidebar.module.scss";
import US from "../../asset/img/eng.png";

import * as api from "../../helpers/apiResponse";
import { Link } from "react-router-dom";
import CollapsMenu from "./CollapsMenu";

const Sidebar = ({ showSidebar }) => {
  const [showCollapsMenu, setshowCollapsMenu] = useState(false);

  return (
    <div
      className={
        showSidebar ? `${style.sidebar} ${style.showSidebar}` : style.sidebar
      }
    >
      <div className={style.top}>
        <Link>
          <img className={style.top_img} src={US} alt="" />
        </Link>
      </div>
      <div className={style.body}>
        <nav>
          <ul className={style.navlist}>
            {api.navlist.map((elm, i) => (
              <li className={style.navlist_item} key={i}>
                <Link className={style.navlist_link}>{elm}</Link>
                {i == 0 && (
                  <>
                    <span
                      className={style.collaps_btn}
                      onClick={() => setshowCollapsMenu(!showCollapsMenu)}
                    >
                      <span className={style.collaps_icon1}></span>
                      <span
                        className={
                          !showCollapsMenu
                            ? style.collaps_icon2
                            : `${style.collaps_icon2} ${style.show}`
                        }
                      ></span>
                    </span>
                    {showCollapsMenu && (
                      <CollapsMenu menuList={api.navlist_inner} />
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
