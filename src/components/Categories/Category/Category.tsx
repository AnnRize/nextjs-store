import Link from "next/link";
import { CategoryType } from "@/types/product";
import style from "./Category.module.scss";

interface Props {
   category: CategoryType;
}

export const Category = ({ category }: Props) => {
   return (
      <Link href={`/categories/${category}`}>
         <article className={style.categoryCard}>
            <p className={style.category}>{category}</p>
         </article>
      </Link>
   );
};
