import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Home/Footer/Footer";
import Header from "../pages/Home/Header/Header";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <>
            { noHeaderFooter || <Header /> }
            <Outlet />
            { noHeaderFooter || <Footer /> }
        </>
    );
};

export default Main;