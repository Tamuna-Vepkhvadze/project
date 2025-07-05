import type { UserData, UserValid } from "../../interface/Interface";
import { my_axios } from "./Axios";

export const AxiosService = {
    login: (data: UserValid) => my_axios.post("/login", data),
    registration: (data: UserData) => my_axios.post("/registration", data),
    refresh:() => my_axios.get("/refresh"),
    logout: () => my_axios.post("/logout"),
    users: () => my_axios.get("/users")

}