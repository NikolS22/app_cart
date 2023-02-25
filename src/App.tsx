import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'Helpers/Constants/routes';
import { Main } from './Containers/Main';
import { Cataloge } from 'Containers/Cataloge';
import { Cart } from 'Containers/Cart';
import { Auth } from 'Containers/Auth';
import { Registr } from 'Components/AuthForm/Registr';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.cataloge} element={<Cataloge />} />
        <Route path={routes.auth} element={<Auth />} />
        <Route path={routes.registr} element={<Registr />} />
    </Routes>
  );
}

export default App;
