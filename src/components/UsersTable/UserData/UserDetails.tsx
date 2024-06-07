import Image from "next/image";
import { User } from "@/types/user";
import style from "./UserDetails.module.scss";

interface Props {
   user: User;
}

export const UserDetails = ({ user }: Props) => {
   return (
      <div className={style.details}>
         <Image  src="/Avatar.jpg" alt="" width={150} height={150} />
         <div className={style.info}>
            <div>
               Name: <span className={style.name}>{user.name.firstname}</span> <span className={style.name}>{user.name.lastname}</span>
            </div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>
               City: <span className={style.name}>{user.address.city}</span>
            </div>
            <div>
               Street:{" "}
               <span className={style.name}>
                  {user.address.street} {user.address.number}
               </span>
            </div>
            <div>Zipcode: {user.address.zipcode}</div>
         </div>
      </div>
   );
};
