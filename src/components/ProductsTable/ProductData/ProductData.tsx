"use client";

import { useState } from "react";
import Image from "next/image";
import { DeleteIcon, DetailsIcon, EditIcon, Modal, MyButton } from "@/interface";
import { ProductDetails } from "./ProductDetails";
import { ProductDelete } from "./ProductDelete";
import { ProductEdit } from "./ProductEdit";
import { Product } from "@/types/product";
import style from "./ProductData.module.scss";

interface Props {
   product: Product;
}

export const ProductData = ({ product }: Props) => {
   const [isDetails, setDetails] = useState(false);
   const [isEdit, setEdit] = useState(false);
   const [isDelete, setDelete] = useState(false);

   return (
      <>
         <tr className={style.user}>
            <td>
               <div className={style.avatarWrapper}>
                  <Image className={style.avatar} src={product.image} alt="" width={50} height={50} />
               </div>
            </td>
            <td className={style.title}>{product.title}</td>
            <td>${product.price}</td>
            <td>
               <div className={style.buttons}>
                  <MyButton
                     className={style.button}
                     onClick={() => {
                        setDetails(true);
                     }}
                  >
                     <DetailsIcon />
                  </MyButton>
                  <MyButton
                     className={style.button}
                     onClick={() => {
                        setEdit(true);
                     }}
                  >
                     <EditIcon />
                  </MyButton>
                  <MyButton
                     className={style.button}
                     onClick={() => {
                        setDelete(true);
                     }}
                  >
                     <DeleteIcon />
                  </MyButton>
               </div>
               <Modal active={isDetails} setActive={setDetails}>
                  <ProductDetails product={product} />
               </Modal>
               <Modal active={isEdit} setActive={setEdit}>
                  <ProductEdit product={product} />
               </Modal>
               <Modal active={isDelete} setActive={setDelete}>
                  <ProductDelete product={product} cancel={setDelete} />
               </Modal>
            </td>
         </tr>
      </>
   );
};
