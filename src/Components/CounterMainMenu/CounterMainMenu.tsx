import React from 'react';
import style from './counter.module.scss';

export type CounterPropsType = {
  title: string;
  info: string;
  pic: string;
};

export const CounterComponentMain = (props: CounterPropsType) => {
  const { title } = props;
  const { info } = props;
  const { pic } = props;

  return (
    <div className={style.counter_wrapper}>
      <div className={style.counter_group}>
        <img src={pic} />
        <h2>{title}</h2>
        <h3>{info}</h3>
        <button >Перейти</button>
      </div>
    </div>
  );
};

export function RenderingArrayOfObjects(data: any, sl: number) {
  const listItems = data.map((element: any, index: number) => {
    return <CounterComponentMain key={index} title={element.title} info={element.info} pic={element.pic} />;
  });
  return <div className={style.groupWrapper}>{listItems.slice(0, sl)}</div>;
};
