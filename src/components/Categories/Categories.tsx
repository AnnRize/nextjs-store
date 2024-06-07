import { Category } from "./Category/Category";
import { CategoriesType } from "@/types/product";
import style from "./Categories.module.scss";

interface Props {
   categories: CategoriesType;
}

export const Categories = ({ categories }: Props) => {
   return <div className={style.grid}>{categories && categories.map((category, index) => <Category key={index} category={category} />)}</div>;
};
