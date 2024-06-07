import { sortType } from "@/types/common";
import { Product, CategoriesType, CategoryType } from "@/types/product";
import axios from "axios";

const product = axios.create({
   baseURL: "https://fakestoreapi.com/products",
});

export const ProductService = {
   async getAll(sort: sortType = "desc") {
      const res = await product.get<Product[]>("", {
         params: {
            sort,
         },
      });
      return res.data;
   },
   async getById(id: number | string) {
      const res = await product.get<Product>(`/${id}`);
      return res.data;
   },
   async getAllCategories() {
      const res = await product.get<CategoriesType>(`/categories`);
      return res.data;
   },
   async getInCategory(category: CategoryType) {
      const res = await product.get<Product[]>(`/category/${category}`);
      return res.data;
   },

   async add(data: Omit<Product, "id">) {
      const res = await product.post("", data);
      return res.data;
   },
   async updateById({ id, data }: { id: number | string; data: Omit<Product, "id"> }) {
      const res = await product.put(`/${id}`, data);
      return res.data;
   },
   async deleteById(id: number | string) {
      const res = await product.delete(`/${id}`);
      return res.data;
   },
};
