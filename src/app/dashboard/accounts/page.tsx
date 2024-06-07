import { Metadata } from "next";
import { UserService } from "@/api/User.service";
import { UserAdd, UsersTable } from "@/components";
import style from "./page.module.scss";

export const metadata: Metadata = {
   title: "Dashboard | Users",
   description: "Dashboard",
};

export default async function Page() {
   const users = await UserService.getAll();

   return (
      <div className={style.container}>
         <UserAdd />
         <UsersTable users={users} />
      </div>
   );
}
