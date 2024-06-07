import { Metadata } from "next";
import { ProductService } from "@/api/Product.service";
import { ProductList } from "@/components";
import { Container } from "@/interface";
import { CategoryType } from "@/types/product";

interface Props {
   params: { category: CategoryType };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const products = await ProductService.getInCategory(params.category);

   return {
      title: `Products`,
      description: params.category,
   };
}

export default async function Page({ params }: Props) {
   const products = await ProductService.getInCategory(params.category);

   return <Container>{products && <ProductList products={products} />}</Container>;
}
