import { notFound } from "next/navigation";
import { CSSProperties } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { ProductService } from "@/api/Product.service";
import { Container, Line } from "@/interface";
import { starsArray } from "@/utils";
import style from "./page.module.scss";

interface Props {
   params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const product = await ProductService.getById(params.id);

   return {
      title: `Product | ${product.title}`,
      description: product.description,
   };
}

export default async function Page({ params }: Props) {
   const product = await ProductService.getById(params.id);

   if (!product) {
      notFound();
   }

   const stars = starsArray(product.rating.rate);

   const imageStyle: CSSProperties = {
      maxWidth: "350px",
      width: "100%",
      objectFit: "contain",
      objectPosition: "top",
   };

   return (
      <Container>
         <div className={style.product}>
            <Image src={product.image} alt={product.title + " img"} width={300} height={400} style={imageStyle} />
            <section className={style.info}>
               <h1 className={style.title}>{product.title}</h1>
               <div className={style.rating}>
                  <div className={style.stars} data-rate={product.rating.rate}>
                     {stars.map((star, index) => (
                        <div className={style.star} key={index}>
                           <div
                              className={style.starBack}
                              style={{
                                 width: `${100 * star}%`,
                              }}
                           />
                        </div>
                     ))}
                  </div>
                  <p>{product.rating.count}</p>
               </div>
               <p className={style.price}>${product.price}</p>
               <p className={style.category}>Category - {product.category}</p>
            </section>
         </div>
         <Line />
         <section className={style.descriptionWrapper}>
            <h2>Description</h2>
            <p className={style.description}>{product.description}</p>
         </section>
      </Container>
   );
}
