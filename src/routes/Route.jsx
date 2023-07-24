import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/Colleges/CollegeDetails";
import Admission from "../pages/Admission/Admission";
import CandidateInfo from "../pages/Admission/CandidateInfo";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRoute";
import MyColleges from "../myColleges/MyColleges";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
                element: <PrivateRoute> <CollegeDetails /> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
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
                path: 'myColleges',
                element: <PrivateRoute> <MyColleges /> </PrivateRoute>
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