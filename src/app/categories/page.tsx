import { ProductService } from "@/api/Product.service";
import { Categories } from "@/components";
import { Container } from "@/interface";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Categories",
   description: "Categories",
};

export default async function Page() {
   const categories = await ProductService.getAllCategories();
   return <Container>{categories && <Categories categories={categories} />}</Container>;
}
