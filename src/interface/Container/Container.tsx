import { ReactNode } from "react";
import style from "./Container.module.scss";

export const Container = ({ children }: { children: ReactNode }) => {
   return <div className={style.container}>{children}</div>;
};
