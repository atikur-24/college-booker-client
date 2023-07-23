import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import Admission from "../pages/Admission/Admission";
import CandidateInfo from "../pages/Admission/CandidateInfo";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'details/:id',
                element: <CollegeDetails />,
                loader: () => fetch('college.json')
            },
            {
                path: 'admission',
                element: <Admission />,
                loader: () => fetch('http://localhost:5000/colleges')
            },
            {
                path: 'candidateInfo/:id',
                element: <CandidateInfo />,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])

export default router;