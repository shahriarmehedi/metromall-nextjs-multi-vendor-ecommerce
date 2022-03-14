import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;