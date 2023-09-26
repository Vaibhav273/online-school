import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SchoolClass = () => {
    const { className } = useParams();

    useEffect(() => {
        $(".book-1").flipBook({
            pages: [
                { src: "images/book2/1.jpg", thumb: "images/book2/1.jpg", title: "Cover" },
                { src: "images/book2/2.jpg", thumb: "images/book2/2.jpg", title: "Page 2" },
                { src: "images/book2/3.jpg", thumb: "images/book2/3.jpg", title: "Page 3" },
                { src: "images/book2/4.jpg", thumb: "images/book2/4.jpg", title: "Page 4" },
                { src: "images/book2/5.jpg", thumb: "images/book2/5.jpg", title: "Page 5" },
                { src: "images/book2/6.jpg", thumb: "images/book2/6.jpg", title: "Page 6" },
                { src: "images/book2/7.jpg", thumb: "images/book2/7.jpg", title: "Page 7" },
                { src: "images/book2/8.jpg", thumb: "images/book2/8.jpg", title: "Page 8" },
                { src: "images/book2/9.jpg", thumb: "images/book2/9.jpg", title: "Page 9" },
                { src: "images/book2/10.jpg", thumb: "images/book2/10.jpg", title: "Page 10" },
                { src: "images/book2/11.jpg", thumb: "images/book2/11.jpg", title: "Page 11" },
                { src: "images/book2/12.jpg", thumb: "images/book2/12.jpg", title: "Page 12" },
            ],
            // skin:'dark',
            pdfUrl: '/src/assets/study-resources/pdf/pdf.pdf',
            // lightBoxFullscreen: true,
            // textLayer: true,
            menuMargin: 10,
            menuTransparent: true,
            menuOverBook: true,
            menu2Margin: 10,
            menu2Transparent: true,
            menu2OverBook: true,
            btnBackground: "rgba(0,0,0,.3)",
            background: "rgba(0,0,0,0.9) !important",



            btnShare: { enabled: false },
            btnPrint: {
                hideOnMobile: true,
                enabled: false
            },
            btnSearch: { enabled: true },
            btnDownloadPages: {
                enabled: false,
                title: "Download pages",
                icon: "fa-download",
                icon2: "file_download",
                url: "images/pdf.rar",
                name: "allPages.zip",
                hideOnMobile: false
            },
            btnDownloadPdf: { enabled: false },
            btnColor: 'rgb(255,120,60)',
            sideBtnRadius: 60,
            sideBtnSize: 60,
            sideBtnBackground: "rgba(0,0,0,.7)",
            sideBtnColor: 'rgb(255,120,60)',
            lightBox: true,
            viewMode: "3d",
            layout: 3,
            btnSound: { vAlign: "top", hAlign: "left" },
            btnAutoplay: { enabled: false },
            currentPage: { vAlign: "bottom", hAlign: "left" },
            // singlePageModeIfMobile: true,
            btnSize: 18,
            menuPadding: "1px"

        });
    }, []);

    return (
        <>
            {/* <Container> */}
            <Col xl={12} className="pageTitle">
                <h3>Subjects</h3>
                <div className="divider div-transparent div-stopper"></div>
            </Col>
            <Row className="mb-4">
                <Col xl={12}>
                    <div className="bookshelf">
                        <div className="covers">
                            <div className="thumb book-1">
                                <span className="text-secondary">English English English</span>
                                <Image src="/src/assets/images/1.jpg" alt="" />
                            </div>
                        </div>
                        <Image className="shelf-img w-100" src="/src/assets/images/shelf_wood.png" />
                    </div>
                </Col>
                {/* <Col xl={6}>
                    <div className="bookshelf">
                        <div className="covers">
                            <div className="thumb book-1"><Image src="/src/assets/images/1.jpg" alt="" /></div>
                        </div>
                        <Image className="shelf-img" src="/src/assets/images/shelf_wood.png" />
                    </div>
                </Col> */}
            </Row>
            {/* </Container> */}
        </>
    );
}
export default SchoolClass;