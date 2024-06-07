"use client";

import { useState } from "react";
import Image from "next/image";
import { DetailsIcon, EditIcon, DeleteIcon, Modal, MyButton } from "@/interface";
import { UserDetails } from "./UserDetails";
import { UserDelete } from "./UserDelete";
import { UserEdit } from "./UserEdit";
import { User } from "@/types/user";
import style from "./UserData.module.scss";

interface Props {
   user: User;
}

export const UserData = ({ user }: Props) => {
   const [isDetails, setDetails] = useState(false);
   const [isEdit, setEdit] = useState(false);
   const [isDelete, setDelete] = useState(false);

   return (
      <tr className={style.user}>
         <td>
            <div className={style.avatarWrapper}>
               <Image className={style.avatar} src="/Avatar.jpg" alt="" width={50} height={50} />
            </div>
         </td>
         <td>
            <span className={style.name}>{user.name.firstname}</span> <span className={style.name}>{user.name.lastname}</span>
         </td>
         <td>{user.username}</td>
         <td>{user.email}</td>
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
               <UserDetails user={user} />
            </Modal>
            <Modal active={isEdit} setActive={setEdit}>
               <UserEdit user={user} />
            </Modal>
            <Modal active={isDelete} setActive={setDelete}>
               <UserDelete user={user} cancel={setDelete} />
            </Modal>
         </td>
      </tr>
   );
};
