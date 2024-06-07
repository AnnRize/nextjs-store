import Image from "next/image";
import { tempUsers } from "@/utils";
import style from "./Section.module.scss";

export const Section = () => {
   return (
      <div className={style.section}>
         <h2 className={style.sectionHeader}>Section</h2>
         <article className={style.agentsContainer}>
            <div className={style.agentsTitle}>⭐Agents</div>
            <p>Meet your agenda and see their ranks to get the best results</p>
            <div className={style.agents}>
               {tempUsers.map((user) => (
                  <Image className={style.avatar} key={user.id} src={user.img} width={50} height={50} alt="" />
               ))}
               <span>+12</span>
            </div>
         </article>

         <article className={style.transactionContainer}>
            <h2 className={style.transactionHeader}>Latest Transaction</h2>
            <div className={style.transactions}>
               {tempUsers.map((user) => (
                  <div key={user.id} className={style.transaction}>
                     <Image className={style.avatar2} src={user.img} width={50} height={50} alt="" />
                     <div>{user.name}</div>
                     <div className={style.sum}>{user.sum} USD</div>
                     <div>{user.date}</div>
                  </div>
               ))}
            </div>
         </article>
      </div>
   );
};
