import { Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import structure from "../assets/study-resources/structure.json";
// import "../assets/js/jquery.js";
// import "../assets/js/flipbook.min.js";

const Subjects = () => {
    // var $: any;
    const { className, subjectName } = useParams();
    const [pageTitle, setPageTitle] = useState('');
    const [rowCount, setRowCount] = useState<number>();
    const flipbookConfig = {
        // skin:'dark',        
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
        menuPadding: "1px",
        btnToc: false
    }
    useEffect(() => {
        if (className) {
            if (+className == 1) {
                setPageTitle("Class I");
            }
            else if (+className == 2) {
                setPageTitle("Class II");
            }
            else if (+className == 3) {
                setPageTitle("Class III");
            }
            else if (+className == 4) {
                setPageTitle("Class IV");
            }
            else if (+className == 5) {
                setPageTitle("Class V");
            }
            else if (+className == 6) {
                setPageTitle("Class VI");
            }
            else if (+className == 7) {
                setPageTitle("Class VII");
            }
            else if (+className == 8) {
                setPageTitle("Class VIII");
            }
            else if (+className == 9) {
                setPageTitle("Class IX");
            }
            else if (+className == 10) {
                setPageTitle("Class X");
            }
            else if (+className == 11) {
                setPageTitle("Class XI");
            }
            else if (+className == 12) {
                setPageTitle("Class XII");
            }

        }
        if (rowCount) {
            structure.classes[+className! - 1].subjects.find(itm => itm.subjectName == subjectName)!.units.forEach(
                (unit, i) => {
                    if (i > 0) {
                        $('#' + unit.split('.')[0]).flipBook({
                            // pages: [
                            //     { src: "images/book2/1.jpg", thumb: "images/book2/1.jpg", title: "Cover" },
                            //     { src: "images/book2/2.jpg", thumb: "images/book2/2.jpg", title: "Page 2" },
                            //     { src: "images/book2/3.jpg", thumb: "images/book2/3.jpg", title: "Page 3" },
                            //     { src: "images/book2/4.jpg", thumb: "images/book2/4.jpg", title: "Page 4" },
                            //     { src: "images/book2/5.jpg", thumb: "images/book2/5.jpg", title: "Page 5" },
                            //     { src: "images/book2/6.jpg", thumb: "images/book2/6.jpg", title: "Page 6" },
                            //     { src: "images/book2/7.jpg", thumb: "images/book2/7.jpg", title: "Page 7" },
                            //     { src: "images/book2/8.jpg", thumb: "images/book2/8.jpg", title: "Page 8" },
                            //     { src: "images/book2/9.jpg", thumb: "images/book2/9.jpg", title: "Page 9" },
                            //     { src: "images/book2/10.jpg", thumb: "images/book2/10.jpg", title: "Page 10" },
                            //     { src: "images/book2/11.jpg", thumb: "images/book2/11.jpg", title: "Page 11" },
                            //     { src: "images/book2/12.jpg", thumb: "images/book2/12.jpg", title: "Page 12" },
                            // ],
                            pdfUrl: "/src/assets/study-resources/" + "class_" + className + "/" + subjectName + "/" + unit,
                            ...flipbookConfig
                        });
                    }
                }
            );
        }
        getRowCount();
    }, [rowCount]);

    const getRowCount = () => {
        const unitLength = structure.classes[+className! - 1].subjects.find(itm => itm.subjectName == subjectName)!.units.length - 1;
        setRowCount(Math.ceil(unitLength / 5));
    }

    return (
        <>
            <Container fluid>
                <Col xl={12} className="pageTitle">
                    <h4>{pageTitle}</h4>
                    <h3 className="text-capitalize">{subjectName!.replace(/_/, ' ')}</h3>
                    <div className="divider div-transparent div-stopper"></div>
                </Col>
                <Row className="mb-4">
                    {[...Array(rowCount)].map(
                        (_, rowIndex) =>
                            < Col xl={12} className="mb-3">
                                <div className="bookshelf">
                                    <div className="covers d-flex flex-wrap align-items-end justify-content-evenly">
                                        {structure.classes[+className! - 1].subjects.find(itm => itm.subjectName == subjectName)!.units.map((unit, i) =>
                                            <>{((i > rowIndex * 5) && (i <= rowIndex * 5 + 5)) &&
                                                <>{i > 0 &&
                                                    <div id={unit.split('.')[0]} className="thumb mb-2 mb-md-0 bg-secondary">
                                                        <span className="text-light fw-bold text-capitalize">{unit.split('.')[0].replace(/_/, ' ')}</span>
                                                        <Image fluid src={"/src/assets/study-resources/class_" + className + "/" + subjectName + "/book_cover.jpg"} alt={subjectName} />
                                                    </div>
                                                }
                                                </>
                                            }</>
                                        )}
                                    </div>
                                    <Image className="shelf-img w-100" src="/src/assets/images/shelf_wood_1920.png" />
                                </div>
                            </Col>
                    )}
                </Row>
            </Container >
        </>
    );
}
export default Subjects;