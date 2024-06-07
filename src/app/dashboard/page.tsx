import { Balance, Section, UsersTable } from "@/components";
import { UserService } from "@/api/User.service";
import style from "./page.module.scss";

export default async function Page() {
   const users = await UserService.getAll();

   return (
      <div className={style.container}>
         <Balance />
         <div className={style.users}>
            <h2 className={style.usersHeader}>Latest Users</h2>
            <UsersTable users={users} />
         </div>
         <Section />
      </div>
   );
}
