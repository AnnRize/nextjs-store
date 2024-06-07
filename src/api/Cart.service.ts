import { Cart } from "@/types/cart";
import { sortType } from "@/types/common";
import axios from "axios";

const cart = axios.create({
   baseURL: "https://fakestoreapi.com/carts",
});

export const CartService = {
   async getAll(sort: sortType = "desc") {
      const res = await cart.get<Cart[]>("", {
         params: {
            sort,
         },
      });
      return res.data;
   },
   async getById(id: number) {
      const res = await cart.get<Cart>(`/${id}`);
      return res.data;
   },
};
