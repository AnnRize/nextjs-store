"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MyButton, Add, Modal, MyInput } from "@/interface";
import { UserService } from "@/api/User.service";
import { UserFormValues } from "@/types/user";
import style from "./UserAdd.module.scss";

export const UserAdd = () => {
   const [isAdd, setAdd] = useState(false);

   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm({
      mode: "onSubmit",
      shouldFocusError: true,
      defaultValues: {
         firstname: "",
         lastname: "",
         username: "",
         email: "",
         password: "",
         city: "",
         street: "",
         number: "",
         zipcode: "",
         lat: "",
         long: "",
         phone: "",
      },
   });

   const { mutate, isPending } = useMutation({
      mutationKey: ["userAdd"],
      mutationFn: UserService.add,
      onSuccess: () => {
         alert("User added!");
         reset();
         setAdd(false);
      },
   });

   const addUser = (data: UserFormValues) => {
      mutate({
         ...data,
         name: {
            firstname: data.firstname,
            lastname: data.lastname,
         },
         address: {
            city: data.city,
            street: data.street,
            number: Number(data.number),
            zipcode: data.zipcode,
            geolocation: {
               lat: data.lat,
               long: data.long,
            },
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
                  <div className={style.infoWrapper}>
                     <div>
                        <h2>About</h2>
                        <div className={style.info}>
                           {errors?.firstname && <p>{errors?.firstname?.message || "Error!"}</p>}
                           <MyInput
                              {...register("firstname", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Firstname"
                           />

                           {errors?.lastname && <p>{errors?.lastname?.message || "Error!"}</p>}
                           <MyInput
                              {...register("lastname", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Lastname"
                           />
                           {errors?.username && <p>{errors?.username?.message || "Error!"}</p>}
                           <MyInput
                              {...register("username", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Username"
                           />
                           {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
                           <MyInput
                              {...register("phone", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Phone"
                           />
                           {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                           <MyInput
                              {...register("email", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Email"
                           />
                           {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                           <MyInput
                              {...register("password", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Password"
                           />
                        </div>
                     </div>
                     <div>
                        <h2>Address</h2>
                        <div className={style.info}>
                           {errors?.city && <p>{errors?.city?.message || "Error!"}</p>}
                           <MyInput
                              {...register("city", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="City"
                           />
                           {errors?.street && <p>{errors?.street?.message || "Error!"}</p>}
                           <MyInput
                              {...register("street", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Street"
                           />
                           {errors?.number && <p>{errors?.number?.message || "Error!"}</p>}
                           <MyInput
                              {...register("number", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Number"
                           />
                           {errors?.zipcode && <p>{errors?.zipcode?.message || "Error!"}</p>}
                           <MyInput
                              {...register("zipcode", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Zipcode"
                           />
                           {errors?.lat && <p>{errors?.lat?.message || "Error!"}</p>}
                           <MyInput
                              {...register("lat", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Lat"
                           />
                           {errors?.long && <p>{errors?.long?.message || "Error!"}</p>}
                           <MyInput
                              {...register("long", {
                                 required: "* Обязательно к заполнению",
                              })}
                              placeholder="Long"
                           />
                        </div>
                     </div>
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
