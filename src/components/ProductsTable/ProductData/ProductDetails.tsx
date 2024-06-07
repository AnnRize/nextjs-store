import Image from "next/image";
import { Product } from "@/types/product";
import { Line } from "@/interface";
import { CSSProperties } from "react";
import style from "./ProductDetails.module.scss";

interface Props {
   product: Product;
}

export const ProductDetails = ({ product }: Props) => {
   const imageStyle: CSSProperties = {
      maxWidth: "200px",
      width: "100%",
      objectFit: "contain",
   };

   return (
      <div className={style.container}>
         <div className={style.details}>
            <Image src={product.image} alt="" width={200} height={200} style={imageStyle} />
            <div className={style.info}>
               <div>Title: {product.title}</div>
               <div>
                  Rating: {product.rating.rate} - {product.rating.count}
               </div>
               <div>Price: {product.price}</div>
               <div>Category: {product.category}</div>
            </div>
         </div>
         <Line />
         <section className={style.description}>
            <h3>Description</h3>
            <p>{product.description}</p>
         </section>
      </div>
   );
};
