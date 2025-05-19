
import { Header } from "../header";
import { HomePage } from "../homePage";
import { RegistrationPage } from "../registrationPage";
import { AboutPage } from "../aboutPage";
import { UserList } from "../userList";
import { UserProfile } from "../uzerProfile";
import { Loaader } from "../loader";
import { ValidPage } from "../validPage";
import { ValidationVrapper } from "../Context/Uzercontext";
import { Outlet } from "react-router-dom";


export const Navigation = [



    {
        
        element: (

           
        <ValidationVrapper>
            <Header/>
            <Outlet/>
        </ValidationVrapper>


        ),
        path: "/",
        children: [
            {
                element: <HomePage/>,
                index: true,
            },
          
            {
                element: <AboutPage/>,
                path: "AboutPage"
            },
            {
                element: <UserList/>,
                path: "UserList"
            },
                {
                element: <UserProfile/>,
                path: "profile/:userId"
            },

            {
                element: <ValidPage/>,
                path:"validPage"
            },
              {
            element: <RegistrationPage/>,
            path: "RegistrationPage"
        },
          
        ]
    },
        
        {  
            element: <Loaader/>,
            path:"Loaader",
        },
        {
            path: "*",
            element: <p>გვერდი ვერ მოიძებნა</p>
        },
    
]
