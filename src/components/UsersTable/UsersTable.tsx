import { UserData } from "./UserData/UserData";
import { User } from "@/types/user";
import style from "./UsersTable.module.scss";

interface Props {
   users: User[];
}
export const UsersTable = ({ users }: Props) => {
   return (
      <table className={style.usersTable}>
         <thead>
            <tr className={style.theadRow}>
               <th className={style.spaceAvatar}> </th>
               <th>NAME</th>
               <th>USERNAME</th>
               <th>EMAIL</th>
               <th></th>
            </tr>
            <tr>
               <th colSpan={5} style={{ paddingBlock: "5px" }}></th>
            </tr>
         </thead>

         <tbody className={style.tbody}>{users && users.map((user) => <UserData key={user.id} user={user} />)}</tbody>
      </table>
   );
};
