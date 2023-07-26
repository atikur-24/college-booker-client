import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ children }) => {
    return (
        <Helmet>
            <title>College Booker | {children}</title>
        </Helmet>
    );
};

export default DynamicTitle;