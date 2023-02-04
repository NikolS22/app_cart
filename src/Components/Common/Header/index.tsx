import React from "react";
import style from "./Header.module.scss";

export const Header = () => {
  return <header className={style.header}>
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <div className={style.logo}><img src="./cake.png" /></div>
        <div className={style.text}>Домашняя кондитерская</div>
      </div>
      <div className={style.rigthSide}>
        <div className={style.menu}><button><img src="./user.png" /></button>
        <button><img src="./shopping-cart.png" /></button></div>
      </div>
    </div>
  </header>
};
