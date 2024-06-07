"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ProductService } from "@/api/Product.service";
import { MyInput, MyButton, MyTextarea } from "@/interface";
import { Product, ProductFormValues } from "@/types/product";
import style from "./ProductEdit.module.scss";

interface Props {
   product: Product;
}

export const ProductEdit = ({ product }: Props) => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      mode: "onSubmit",
      shouldFocusError: true,
      defaultValues: {
         title: product.title,
         price: product.price,
         category: product.category,
         description: product.description,
         image: product.image,
         rate: product.rating.rate.toString(),
         count: product.rating.count.toString(),
      },
   });

   const { mutate,isPending } = useMutation({
      mutationKey: ["productEdit"],
      mutationFn: ProductService.updateById,
      onSuccess: () => alert("Product update!"),
   });

   const updateUser = (data: ProductFormValues) => {
      mutate({
         id: product.id,
         data: {
            ...data,
            rating: {
               rate: Number(data.rate),
               count: Number(data.count),
            },
         },
      });
   };

   return (
      <div>
         <form className={style.form} onSubmit={handleSubmit(updateUser)}>
            <h2>About</h2>
            <div className={style.info}>
               {errors?.image && <p>{errors?.image?.message || "Error!"}</p>}
               <MyInput
                  {...register("image", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Image"
               />
               {errors?.title && <p>{errors?.title?.message || "Error!"}</p>}
               <MyInput
                  {...register("title", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Title"
               />
               {errors?.price && <p>{errors?.price?.message || "Error!"}</p>}
               <MyInput
                  {...register("price", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Price"
               />
               {errors?.category && <p>{errors?.category?.message || "Error!"}</p>}
               <MyInput
                  {...register("category", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Category"
               />
               {errors?.rate && <p>{errors?.rate?.message || "Error!"}</p>}
               <MyInput
                  {...register("rate", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Rate"
               />
               {errors?.count && <p>{errors?.count?.message || "Error!"}</p>}
               <MyInput
                  {...register("count", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Count"
               />
               {errors?.description && <p>{errors?.description?.message || "Error!"}</p>}
               <MyTextarea
                  {...register("description", {
                     required: "* Обязательно к заполнению",
                  })}
                  placeholder="Description"
                  rows={5}
               />
            </div>

            <MyButton disabled={isPending} type="submit">Submit</MyButton>
         </form>
      </div>
   );
};
