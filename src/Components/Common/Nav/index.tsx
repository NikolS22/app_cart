import { routes } from "Helpers/Constants/routes";
import React from "react";
import { Link } from "react-router-dom";
import style from './Nav.module.scss';

export const Nav = () => {
  return (
  <nav className={style.nav}>
  <button><Link to={routes.main}>Главная</Link></button>
  <button><Link to={routes.cataloge}>Каталог</Link></button>
  <button><Link to={routes.cart}>Корзина</Link></button>
  <button><Link to={routes.notFound}>О нас</Link></button>
  <button><Link to={routes.auth}>Регистрация</Link></button>
  </nav>
  );
};
