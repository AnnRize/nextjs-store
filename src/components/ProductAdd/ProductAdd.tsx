"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Add, Modal, MyButton, MyInput } from "@/interface";
import { ProductService } from "@/api/Product.service";
import { ProductFormValues } from "@/types/product";
import style from "./ProductAdd.module.scss";

export const ProductAdd = () => {
   const [isAdd, setAdd] = useState(false);

   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm({
      mode: "onChange",
      shouldFocusError: true,
      defaultValues: {
         title: "",
         price: "",
         category: "",
         description: "",
         image: "",
         rate: "",
         count: "",
      },
   });

   const { mutate, isPending } = useMutation({
      mutationKey: ["productAdd"],
      mutationFn: ProductService.add,
      onSuccess: () => {
         alert("Product added!");
         reset();
         setAdd(false);
      },
   });

   const addUser = (data: ProductFormValues) => {
      mutate({
         ...data,
         rating: {
            rate: Number(data.rate),
            count: Number(data.count),
         },
      });
   };

   return (
      <>
         <MyButton className={style.addButton} onClick={() => setAdd(true)}>
            <Add />
         </MyButton>
         <Modal active={isAdd} setActive={setAdd}>
            <div className={style.add}>
               <form className={style.form} onSubmit={handleSubmit(addUser)}>
                  <h2>About</h2>
                  <div className={style.info}>
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
                     {errors?.description && <p>{errors?.description?.message || "Error!"}</p>}
                     <MyInput
                        {...register("description", {
                           required: "* Обязательно к заполнению",
                        })}
                        placeholder="Description"
                     />
                     {errors?.image && <p>{errors?.image?.message || "Error!"}</p>}
                     <MyInput
                        {...register("image", {
                           required: "* Обязательно к заполнению",
                        })}
                        placeholder="Image"
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
                  </div>

                  <MyButton disabled={isPending} type="submit">
                     Add
                  </MyButton>
                  <MyButton disabled={isPending} onClick={() => reset()} type="reset">
                     Reset
                  </MyButton>
               </form>
            </div>
         </Modal>
      </>
   );
};
