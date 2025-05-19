import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Navigation } from "./navigationPage"

export const AppRouter = () => {
    return(
         <RouterProvider router={createBrowserRouter(Navigation)}/>
    )
}