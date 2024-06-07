import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import style from "./ProductCard.module.scss";

interface Props {
   product: Product;
}

export const ProductCard = ({ product }: Props) => {
   const imageStyle: CSSProperties = {
      objectFit: "contain",
      margin: "0 auto",
   };

   return (
      <article className={style.card}>
         <Image src={product.image} alt={product.title + " img"} width={240} height={240} style={imageStyle} />
         <Link className={style.link} href={`/products/${product.id}`}>
            {product.title}
         </Link>
         <div className={style.price}>${product.price}</div>
      </article>
   );
};
