import { sortType } from "@/types/common";
import { User } from "@/types/user";
import axios from "axios";

const user = axios.create({
   baseURL: "https://fakestoreapi.com/users",
});

export const UserService = {
   async getAll(sort: sortType = "desc") {
      const res = await user.get<User[]>("", {
         params: {
            sort,
         },
      });
      return res.data;
   },
   async getById(id: number | string) {
      const res = await user.get<User>(`/${id}`);
      return res.data;
   },
   async add(data: Omit<User, "id">) {
      const res = await user.post("", data);
      return res.data;
   },
   async updateById({ id, data }: { id: number | string; data: Omit<User, "id"> }) {
      const res = await user.put(`/${id}`, data);
      return res.data;
   },
   async deleteById(id: number | string) {
      const res = await user.delete(`/${id}`);
      return res.data;
   },
};
