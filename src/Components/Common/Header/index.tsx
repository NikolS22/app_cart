import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import style from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { UserSelectors, UserSliceActions } from 'Store';

export const Header = () => {
  const userEmail = useSelector(UserSelectors.getUserEmail);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(UserSliceActions.clearUserData());
  };
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <div className={style.logo}>
            <img src="./cake.png" />
          </div>
          <div className={style.text}>Домашняя кондитерская</div>
        </div>
        <div className={style.rigthSide}>
          {userEmail ? (
            <div>
              <span className={style.name}>{userEmail}</span>
              <button type="button" onClick={logoutHandler}>
                logout
              </button>
            </div>
          ) : (
            <Link to={routes.auth}>Вход</Link>
          )}
          <div className={style.menu}>
            <button>
              <Link to={routes.auth}>
                <img src="./user.png" />
              </Link>
            </button>
            <button>
              <Link to={routes.cart}>
                <img src="./shopping-cart.png" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
