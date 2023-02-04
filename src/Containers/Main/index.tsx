import { PageWrapper } from "Components/Common/PageWrapper";
import { Banner } from "Components/Main/banner";
import { CounterBlock } from "Components/Common/Items";
import React from "react";
/* import { CounterComponent } from "Components/Common/Items"; */

export const Main = () => {
  return (
    <PageWrapper>
      <Banner />
      <h1> У нас вы можете заказать </h1>
      <CounterBlock />
      <h1> Почему клиенты выбирают нас </h1>
      <h3>Картинка плюс 3 дива с позициями (верстка)</h3>
    </PageWrapper>
  );
};
