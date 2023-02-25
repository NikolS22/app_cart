import { Input } from 'Components/Common/Input';
import { routes } from 'Helpers/Constants/routes';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import style from './AuthForm.module.scss';

export const Registr = () => {
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
    /* проверки данных */
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
      <h1>Регистрация</h1>
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
      <button className={style.buttonInput} type="button" onClick={submmitHandler}><Link to={routes.main}>Регистрация</Link></button>

    </div>
  );
};
