import { CounterComponent } from "Components/Common/Items/countBlocks";
import React from "react";
import style from './counter.module.scss';

export const CounterBlock = () => {
  return (
      <div>
        <CounterComponent title={'Маленькие торты'} infoVes={'до 1 кг'} pic={'./cake_0.jpg'} />
        <CounterComponent title={'Средние торты'} infoVes={'от 1 кг до 3 кг'} pic={'./cake_0.jpg'} />
        <CounterComponent title={'Большие торты'} infoVes={'от 3 кг'} pic={'./cake_2.jpg'} />
        <div className={style.counter_group}><button >Смотреть все разделы</button></div>
       </div>
  );
};
