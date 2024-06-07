export interface Product {
   id: number;
   title: string;
   price: string;
   category: string;
   description: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   };
}

export type CategoryType = "electronics" | "jewelery" | "men's clothing" | "women's clothing";

export type CategoriesType = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export interface ProductFormValues {
   title: string;
   price: string;
   category: string;
   description: string;
   image: string;
   rate: string;
   count: string;
}
