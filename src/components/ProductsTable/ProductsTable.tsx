import { ProductData } from "./ProductData/ProductData";
import style from "./ProductsTable.module.scss";
import { Product } from "@/types/product";

interface Props {
   products: Product[];
}

export const ProductsTable = ({ products }: Props) => {
   return (
      <table className={style.productsTable}>
         <thead>
            <tr className={style.theadRow}>
               <th className={style.spaceAvatar}> </th>
               <th>TITLE</th>
               <th>PRICE</th>
               <th></th>
            </tr>
            <tr>
               <th colSpan={5} style={{ paddingBlock: "5px" }}></th>
            </tr>
         </thead>

         <tbody className={style.tbody}>{products && products.map((product) => <ProductData key={product.id} product={product} />)}</tbody>
      </table>
   );
};
