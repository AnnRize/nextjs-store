import { Metadata } from "next";
import { ProductAdd, ProductsTable } from "@/components";
import { ProductService } from "@/api/Product.service";
import style from "./page.module.scss";

export const metadata: Metadata = {
   title: "Dashboard | Products",
   description: "Dashboard",
};

export default async function Page() {
   const products = await ProductService.getAll();

   return (
      <div className={style.container}>
         <ProductAdd />
         <ProductsTable products={products} />
      </div>
   );
}
