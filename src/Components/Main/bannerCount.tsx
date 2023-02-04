import React, { useState } from 'react';
import style from "./Banner.module.scss"

export const BannerComponent = () => {
  const [i, setI] = useState(0);

  const incremmentHeadler = () => {
    setI((prev) => prev + 1);
  };
  const decremmentHeadler = () => {
    setI((prev) => prev - 1);
  };
  return (
    <div className={style.wrapper}>
      <button disabled={i === 0} onClick={decremmentHeadler} className={style.arrs}><img src='./angle-left.png' /></button>
      <img src = {`./banner_` + i.toString() + `.jpg`} className={style.banner}/>
      <button disabled={i === 2} onClick={incremmentHeadler} className={style.arrs}><img src='./angle-right.png' /></button>
    </div>
  );
};
