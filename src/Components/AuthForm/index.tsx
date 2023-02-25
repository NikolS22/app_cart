import { Input } from 'Components/Common/Input';
import { routes } from 'Helpers/Constants/routes';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from './AuthForm.module.scss';

export const AuthForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const changeHandler =
    (fieldName: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => {
        const newData = { ...prev };
        newData[fieldName] = event.target.value;
        return newData;
      });
    };

  const submmitHandler = () => {
    if (formState.password.length < 5) {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');

      console.log(formState, 'отправленно на сервер');
    }
  };

  useEffect(() => {
    if (formState.password.length < 5 && formState.password !== '') {
      setErrorMessage('пароль слишком короткий');
    } else {
      setErrorMessage('');
    }
  }, [formState.password]);

  return (
    <div className={style.wrapper}>
      <h1>Авторизация</h1>
      <div className={style.input_group}>
        <Input name={'E-mail:'} value={formState.email} changeHandler={changeHandler('email')} />
        <Input
          name={'Пароль:'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        />
      </div>

      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}
      <div className={style.buttonGroop}>
      <button className={style.buttonInput} type="button" onClick={submmitHandler}><Link to={routes.main}>Вход</Link></button>
      <button className={style.buttonReg} type="button"><Link to={routes.registr}>Регистрация</Link></button></div>
      <span><Link to={routes.notFound}>Забыли пароль?</Link></span>
    </div>
  );
};
