import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import LogInForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Homepage from "./components/Homepage";
import ForgetPass from "./components/ForgetPass";

export const router = createBrowserRouter([
    {path: "/", element: <App/> },
    {path: "/login", element: <LogInForm/> },
    {path: "/signup", element: <SignUpForm/> },
    {path: "/home", element: <Homepage/> },
    {path: "/forgetpass", element: <ForgetPass/>},
    
])