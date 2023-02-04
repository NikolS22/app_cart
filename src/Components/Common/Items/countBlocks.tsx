import React /*,  { useState } */ from 'react';
import style from './counter.module.scss';

export type CounterPropsType = {
  title: string;
  infoVes: string;
  pic: string;
  /* count?: number; */
};

export const CounterComponent = (props: CounterPropsType) => {
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
        <button >Заказать</button>
        {/* <button disabled={count === 0} onClick={decremmentHeadler}>
          remove
        </button>
        <h2>{count}</h2>
        <button onClick={incremmentHeadler}>add</button> */}
      </div>
    </div>
  );
};

/* export function RenderingArrayOfObjects() {
  const data = [
    { title: 'торт 1', infoVes: '1', pic: './cake_0.jpg' },
    { title: 'торт 2', infoVes: '2', pic: './cake_0.jpg' },
    { title: 'торт 3', infoVes: '3', pic: './cake_0.jpg' },
  ];
  const listItems = data.map((element) => {
    return   <CounterComponent title={'Большие торты'} infoVes={'от 3 кг'} pic={'./cake_2.jpg'} />;
  });
  return <div>{listItems}</div>;
};
 */
