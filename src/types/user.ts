export interface User {
   id: number;
   email: string;
   username: string;
   password: string;
   name: {
      firstname: string;
      lastname: string;
   };
   address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
         lat: string;
         long: string;
      };
   };
   phone: string;
}


export interface UserFormValues {
   firstname: string;
   lastname: string;
   username: string;
   email: string;
   password: string;
   city: string;
   street: string;
   number: string;
   zipcode: string;
   lat: string;
   long: string;
   phone: string;
}