import { PageWrapper } from "Components/Common/PageWrapper";
import { Banner } from "Components/Main/banner";
import { CounterBlockMain } from "Components/CounterMainMenu";
import style from './main.module.scss';
import React from "react";
import { routes } from "Helpers/Constants/routes";
import { Link } from "react-router-dom";
import { WhyChanch } from "Components/Main/chanch";
/* import { CounterComponent } from "Components/Common/Items"; */

export const Main = () => {
  return (
    <PageWrapper>
      <Banner />
      <h1 className={style.text}> У нас вы можете заказать </h1>
      <h2 className={style.text_min}> от простых конфет в подарочной упаковке до изысканых тортов по индивидуальному заказу</h2>
      <CounterBlockMain />
      <div className={style.buttonStyle}><button><Link to={routes.cataloge}>Смотреть все разделы</Link></button></div>
      <WhyChanch />
    </PageWrapper>
  );
};
