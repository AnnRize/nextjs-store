import { Metadata } from "next";
import { ProductService } from "@/api/Product.service";
import { ProductList } from "@/components";
import { Container } from "@/interface";

export const metadata: Metadata = {
   title: "All Products",
   description: "All Products",
};

export default async function Page() {
   const products = await ProductService.getAll();

   return <Container>{products && <ProductList products={products} />}</Container>;
}
