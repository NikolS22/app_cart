/* import { RenderingArrayOfObjects } from "Components/Common/Items/CounterMainMenu"; */
/* import React from "react";
import style from './counter.module.scss'; */
import { RenderingArrayOfObjects } from "./CounterMainMenu";
import { data } from 'Helpers/MainMenu/mainMenu'

export const CounterBlockMain = () => {
  return RenderingArrayOfObjects(data, 3);
};

export const CounterBlockMainCatalog = () => {
  return RenderingArrayOfObjects(data, data.length);
};
