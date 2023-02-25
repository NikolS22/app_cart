import React from "react"
import style from "./chanch.module.scss"

export const WhyChanch = () => {
  return (
    <div>
      <h1 className={style.text}> Почему клиенты выбирают нас: </h1>
      <h2 className={style.text_min}>мы заботимся о каждом покупателе</h2>
      <div className={style.wrapper}>
        <div className={style.leftSide}><img src='./cake_12.jpg' /></div>
        <div>
          <div className={style.rigthSide}><img src='./transport.png' />Бесплатная доставка при заказе от 3000 р.</div>
          <div className={style.rigthSide}><img src='./money.png' />Выгодные цены, а так же скидки и акции</div>
          <div className={style.rigthSide}><img src='./kachestvo.png' />Качество продуктов</div>
        </div>
      </div>
    </div>
  );
};
