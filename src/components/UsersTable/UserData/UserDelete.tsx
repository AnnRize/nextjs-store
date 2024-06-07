import { User } from "@/types/user";
import style from "./UserDelete.module.scss";
import { MyButton } from "../../../interface/MyButton/MyButton";
import { useMutation } from "@tanstack/react-query";
import { UserService } from "@/api/User.service";
import { Dispatch } from "react";

interface Props {
   user: User;
   cancel: Dispatch<boolean>;
}

export const UserDelete = ({ user, cancel }: Props) => {
   const { mutate, isPending } = useMutation({
      mutationKey: ["userDelete"],
      mutationFn: UserService.deleteById,
      onSuccess: () => {
         alert("User deleted!");
         cancel(false);
      },
   });

   return (
      <div className={style.delete}>
         <h1>Delete user - {user.username}?</h1>
         <div className={style.buttons}>
            <MyButton disabled={isPending} onClick={() => mutate(user.id)}>
               Yes
            </MyButton>
            <MyButton disabled={isPending} onClick={() => cancel(false)}>
               Cancel
            </MyButton>
         </div>
      </div>
   );
};
