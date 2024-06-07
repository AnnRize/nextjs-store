import { ReactNode } from "react";
import { DashboardMenu } from "@/components";
import { Metadata } from "next";
import style from "./layout.module.scss";

interface Props {
   children: ReactNode;
}

export const metadata: Metadata = {
   title: "Dashboard | Home",
   description: "Dashboard",
};

export default function Layout({ children }: Props) {
   return (
      <div className={style.container}>
         <DashboardMenu />
         <div className={style.content}>{children}</div>
      </div>
   );
}
