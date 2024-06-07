import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard/ProductCard";
import style from "./ProductList.module.scss";

interface Props {
   products: Product[];
}
export const ProductList = ({ products }: Props) => {
   return (
      <div className={style.grid}>
         {products.map((p) => (
            <ProductCard key={p.id} product={p} />
         ))}
      </div>
   );
};
