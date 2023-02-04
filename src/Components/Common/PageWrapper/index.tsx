import React from "react";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import style from "./PageWrapper.module.scss"

type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.flexContent}>
      <Header />
      <Nav />
      {children}
      </div>
      <div className={style.flexFooter}><Footer /></div>
    </div>
  );
};
