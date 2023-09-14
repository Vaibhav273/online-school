import { Suspense } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./component/_footer";
import Header from "./component/_header";
import Loader from "./global/_loader";

function Layout() {
    return (
        <>
            <Header />
            <Container fluid className="box-layout">
                <Suspense fallback={<Loader />} >
                    <Outlet />
                </Suspense>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
