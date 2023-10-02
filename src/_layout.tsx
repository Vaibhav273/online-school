import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./component/_footer";
import Header from "./component/_header";
import Loader from "./global/_loader";

function Layout() {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />} >
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
}

export default Layout;
