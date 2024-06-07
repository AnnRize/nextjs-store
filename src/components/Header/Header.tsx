import Link from "next/link";
import style from "./Header.module.scss";

export const Header = () => {
   return (
      <header className={style.header}>
         <p className={style.logo}>
            <Link className={style.link} href={"/"}>
               店舗
            </Link>
         </p>
         <nav>
            <ul className={style.linkList}>
               <li>
                  <Link className={style.link} href={"/"}>
                     Home
                  </Link>
               </li>
               <li>
                  <Link className={style.link} href={"/products"}>
                     All Products
                  </Link>
               </li>
               <li>
                  <Link className={style.link} href={"/categories"}>
                     Categories
                  </Link>
               </li>
               <li>
                  <Link className={style.link} href={"/dashboard"}>
                     Dashboard
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};
