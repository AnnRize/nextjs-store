"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Accounts, Customers, Developers, Home, Line, Payments, Products, Reports, Settings } from "@/interface";
import style from "./DashboardMenu.module.scss";

export const DashboardMenu = () => {
   const path = usePathname();

   return (
      <div className={style.menu}>
         <div className={style.linkList}>
            <Link className={`${style.link} ${path === "/dashboard" && style.active}`} href={"/dashboard"}>
               <Home /> Home
            </Link>
            <Line />
            <Link className={`${style.link} ${path === "/dashboard/products" && style.active}`} href={"/dashboard/products"}>
               <Products /> Products
            </Link>
            <Link className={`${style.link} ${path === "/dashboard/accounts" && style.active}`} href={"/dashboard/accounts"}>
               <Accounts /> Accounts
            </Link>

            <div className={style.link}>
               <Payments /> Payments
            </div>
            <div className={style.link}>
               <Customers /> Customers
            </div>
            <div className={style.link}>
               <Reports /> Reports
            </div>
            <Line />
            <div className={style.link}>
               <Developers /> Developers
            </div>
            <div className={style.link}>
               <Settings /> Settings
            </div>
         </div>
      </div>
   );
};
