import style from "./ProductDelete.module.scss";
import { MyButton } from "../../../interface/MyButton/MyButton";
import { useMutation } from "@tanstack/react-query";
import { Dispatch } from "react";
import { Product } from "@/types/product";
import { ProductService } from "@/api/Product.service";

interface Props {
   product: Product;
   cancel: Dispatch<boolean>;
}

export const ProductDelete = ({ product, cancel }: Props) => {
   const { mutate,isPending } = useMutation({
      mutationKey: ["productDelete"],
      mutationFn: ProductService.deleteById,
      onSuccess: () => {
         alert("Product deleted!");
         cancel(false);
      },
   });

   return (
      <div className={style.delete}>
         <h1>Delete product - {product.title}?</h1>
         <div className={style.buttons}>
            <MyButton disabled={isPending} onClick={() => mutate(product.id)}>Yes</MyButton>
            <MyButton disabled={isPending} onClick={() => cancel(false)}>Cancel</MyButton>
         </div>
      </div>
   );
};
