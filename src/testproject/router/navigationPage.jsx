
import { Header } from "../header";
import { HomePage } from "../homePage";
import { RegistrationPage } from "../registrationPage";
import { AboutPage } from "../aboutPage";
import { UserList } from "../userList";
import { UserProfile } from "../uzerProfile";
import { ValidPage } from "../validPage";
import { ValidationVrapper } from "../Context/Uzercontext";
import { Outlet } from "react-router-dom";
import { ThemeVrapper } from "../Context/ThemeContext";
import { SuccessfulRegistration } from "../SuccessfulRegistration";
import { LanguageVrapper } from "../Context/LanguageContext";


export const Navigation = [



    {
        
        element: (
        <LanguageVrapper>
            <ThemeVrapper>
                <ValidationVrapper>

                    <Header/>
                    <Outlet/>

                </ValidationVrapper>
            </ThemeVrapper>
        </LanguageVrapper>

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
            {
                element: <SuccessfulRegistration/>,
                path: "successful-registration"
            }
          
        ]
    },
        {
            path: "*",
            element: <p>გვერდი ვერ მოიძებნა</p>
        },
    
]
