/* import { title } from 'process'; */
import React /*,  { useState } */ from 'react';
import style from './counter.module.scss';

export type CounterPropsType = {
  title: string;
  infoVes: string;
  pic: string;
  /* count?: number; */
};

export const CounterComponentMain = (props: CounterPropsType) => {
  const { title } = props;
  const { infoVes } = props;
  const { pic } = props;

  /*  const [count, setCount] = useState(0);

const incremmentHeadler = () => {
    setCount((prev) => prev + 1);
  };
  const decremmentHeadler = () => {
    setCount((prev) => prev - 1);
  }; */
  return (
    <div className={style.counter_wrapper}>
      <div className={style.counter_group}>
        <h1>{title}</h1>
        <h3>{infoVes}</h3>
        <img src={pic} />
        <button >Подробнее</button>
        {/* <button disabled={count === 0} onClick={decremmentHeadler}>
          remove
        </button>
        <h2>{count}</h2>
        <button onClick={incremmentHeadler}>add</button> */}
      </div>
    </div>
  );
};

export function RenderingArrayOfObjects() {
  const data = [
    { title: 'торт 1', infoVes: '1', pic: './cake_0.jpg' },
    { title: 'торт 2', infoVes: '2', pic: './cake_0.jpg' },
    { title: 'торт 3', infoVes: '3', pic: './cake_0.jpg' },
  ];
  const listItems = data.map((element, index) => {
    return <CounterComponentMain key={index} title={element.title} infoVes={element.infoVes} pic={element.pic} />;
  });
  return <div>{listItems}</div>;
};
