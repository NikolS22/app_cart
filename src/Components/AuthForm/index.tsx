import { Input } from 'Components/Common/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
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
      <h1>AUTH FORM</h1>
      <div className={style.input_group}>
        <Input name={'Email'} value={formState.email} changeHandler={changeHandler('email')} />
        <Input
          name={'Password'}
          value={formState.password}
          changeHandler={changeHandler('password')}
          type="password"
        />
      </div>

      {errorMessage !== '' && <div className={style.error}>{errorMessage}</div>}

      <button type="button" onClick={submmitHandler}>
        AUTH
      </button>
    </div>
  );
};
